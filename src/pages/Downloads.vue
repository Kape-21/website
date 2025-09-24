<script setup lang="ts">
import Page from "@/components/layout/Page.vue";
import { translate } from "@/lib/translations/translate.ts";
import { computed, inject } from "vue";
import type { ContextLocaleType } from "@/types/context-locale.type.ts";
import { FallbackLauncherData, LocaleContextKey } from "@/constants/application.ts";
import DownloadLinks from "@/components/general/DownloadLinks.vue";
import { useQuery } from "@tanstack/vue-query";
import type { GithubReleasesType } from "@/types/github-releases.type.ts";

document.title = "Downloads - Freesm Launcher";
document
  ?.querySelector?.("meta[name=\"description\"]")
  ?.setAttribute?.(
    "content",
    "Download Freesm Launcher for your platform for free, no ads, no viruses, no SMS" +
    ", no registration, no calls, no glowies. Or don't do it, it's up to you!",
  );

const locale = inject<ContextLocaleType>(LocaleContextKey);

const { data, isPending } = useQuery({
  "queryKey": ["github", "repository", "freesmlauncher"],
  "queryFn" : async (): Promise<GithubReleasesType> => {
    const response = await fetch("https://api.github.com/repos/freesmteam/freesmlauncher/releases/latest");
    const repository: unknown = await response.json();

    if (
      typeof repository !== "object" ||
      repository === null ||
      !("name" in repository) ||
      typeof repository?.name !== "string" ||
      !("assets" in repository) ||
      !Array.isArray(repository.assets)
    ) {
      return FallbackLauncherData;
    }

    for (const artifact of repository?.assets) {}

    return {
      "Name"     : repository?.name,
      "Downloads": {
        "runtime-flatpak-arm": "",
        "runtime-flatpak-x86": "",
        "runtime-qt5-linux"  : "",
        "runtime-qt6-linux"  : "",
        "runtime-app-image"  : "",
      },
    };
  },
});
const releases = computed((): GithubReleasesType => {
  if (isPending.value || data.value === undefined) {
    return {
      "Name"     : "Freesm Launcher Sequoia x.x.x",
      "Downloads": FallbackLauncherData.Downloads,
    };
  }

  return data.value;
});
</script>

<template>
  <Page>
    <div class="mx-auto max-w-240 flex flex-col gap-8 px-4 pt-12">
      <p class="select-text text-center text-balance text-5xl text-white font-bold sm:text-7xl">
        {{ translate("pages.downloads.title", locale) }}
      </p>
      <p class="select-text text-center text-balance text-lg text-gray-400 sm:text-2xl">
        {{ translate("pages.downloads.description", locale).replace("%s", releases.Name) }}
      </p>
    </div>
    <DownloadLinks :data="data" :is-pending="isPending" />
  </Page>
</template>