<script setup lang="ts">
import Image from "@/components/base/Image.vue";
import { translate } from "@/lib/translations/translate.ts";
import { inject } from "vue";
import type { ContextLocaleType } from "@/types/context-locale.type.ts";
import { LocaleContextKey } from "@/constants/application.ts";

const locale = inject<ContextLocaleType>(LocaleContextKey);
</script>

<template>
  <div class="mx-auto mt-12 max-w-240 flex flex-col flex-nowrap gap-4 px-4 lg:flex-row">
    <div class="flex flex-1 flex-col items-center gap-4 rounded-md bg-catppuccin-900 p-4">
      <Image
        class-names="w-full rounded-md"
        src="/detail-mods.webp"
        alt="Freesm Launcher's mods section"
      />
      <p class="select-text text-center text-xl text-catppuccin-50 font-semibold">
        {{ translate("pages.home.details.mod-management.title", locale) }}
      </p>
    </div>
    <div class="flex flex-1 flex-col gap-4">
      <div class="flex flex-1 flex-col items-center gap-4 rounded-md bg-catppuccin-900 p-4">
        <Image
          class-names="w-full rounded-md"
          src="/detail-import.webp"
          alt="Freesm Launcher's instance section"
        />
        <p class="select-text text-center text-xl text-catppuccin-50 font-semibold">
          {{ translate("pages.home.details.modpack-importing.title", locale) }}
        </p>
      </div>
      <div class="flex flex-1 flex-col items-center justify-between gap-4 rounded-md bg-catppuccin-900 p-4">
        <Image
          class-names="w-full rounded-md"
          src="/detail-accounts.webp"
          alt="Freesm Launcher's accounts section"
        />
        <p class="select-text text-center text-xl text-catppuccin-50 font-semibold">
          {{ translate("pages.home.details.more-auth-servers.title", locale) }}
        </p>
      </div>
    </div>
  </div>
</template>