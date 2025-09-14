<script setup lang="ts">
import { UAParser } from "ua-parser-js";
import { inject } from "vue";
import type { ContextLocaleType } from "@/types/context-locale.type.ts";
import { LocaleContextKey } from "@/constants/application.ts";
import { getPlatformName } from "@/lib/helpers/get-platform-name.ts";
import { translate } from "@/lib/translations/translate.ts";
import { Routes, Socials } from "@/constants/routes.ts";

const { os } = UAParser(navigator.userAgent);
const platform = getPlatformName(os?.name);
let icon: string;

switch (platform) {
  case "Windows": {
    icon = "i-mdi-windows";
    break;
  }
  case "Linux": {
    icon = "i-mdi-linux";
    break;
  }
  case "macOS": {
    icon = "i-mdi-apple";
    break;
  }
}

const locale = inject<ContextLocaleType>(LocaleContextKey);
</script>

<template>
  <div class="mx-auto max-w-240 flex flex-col gap-8 px-4 pt-12">
    <p class="select-text text-center text-balance text-5xl text-white font-bold sm:text-7xl">
      <span>{{ translate("pages.home.hero.title", locale) }}</span>
      {{ " " }}
      <span class="animate-text-chroma">{{ platform }}</span>
    </p>
    <p class="text-center text-balance text-lg text-gray-400 sm:text-2xl">
      {{ translate("pages.home.hero.description", locale) }}
    </p>
    <div class="flex justify-center gap-2">
      <RouterLink
        :to="Routes.Downloads.Path"
        class="flex items-center gap-2 rounded-md bg-mauve px-4 py-2 text-center text-balance text-[18px] text-black font-bold transition-[background-color,color] hover:bg-mauve_latte hover:text-white"
      >
        <div class="grid min-h-6 min-w-6 place-items-center">
          <div :class="['w-6 h-6', icon]" />
        </div>
        {{ translate("pages.home.hero.download-now", locale) }}
      </RouterLink>
      <a
        target="_blank"
        :href="Socials.Github.Home"
        class="rounded-md bg-transparent px-4 py-2 text-center text-balance text-[18px] text-white font-bold transition-[background-color,color] hover:text-mauve hover:bg-[theme(colors.mauve/.1)]"
      >
        Github
      </a>
    </div>
  </div>
</template>