<script setup lang="ts">
import Page from "@/components/layout/Page.vue";
import { translate } from "@/lib/translations/translate.ts";
import { inject } from "vue";
import type { ContextLocaleType } from "@/types/context-locale.type.ts";
import { LocaleContextKey } from "@/constants/application.ts";
import DownloadLinks from "@/components/general/DownloadLinks.vue";

const locale = inject<ContextLocaleType>(LocaleContextKey);

document.title = "Downloads - Freesm Launcher";
document
  ?.querySelector?.("meta[name=\"description\"]")
  ?.setAttribute?.(
    "content",
    "Download Freesm Launcher for your platform for free, no ads, no viruses, no SMS" +
    ", no registration, no calls, no glowies. Or don't do it, it's up to you!",
  );
</script>

<template>
  <Page>
    <div class="mx-auto max-w-240 flex flex-col gap-8 px-4 pt-12">
      <p class="select-text text-center text-balance text-5xl text-white font-bold sm:text-7xl">
        {{ translate("pages.downloads.title", locale) }}
      </p>
      <p class="select-text text-center text-balance text-lg text-gray-400 sm:text-2xl">
        {{ translate("pages.downloads.description", locale) }}
      </p>
    </div>
    <DownloadLinks />
  </Page>
</template>