<script setup lang="ts">
import { UAParser } from "ua-parser-js";
import { inject } from "vue";
import type { ContextLocaleType } from "@/types/context-locale.type.ts";
import { LocaleContextKey } from "@/constants/application.ts";
import { getPlatformName } from "@/lib/helpers/get-platform-name.ts";
import { translate } from "@/lib/translations/translate.ts";

const { os } = UAParser(navigator.userAgent);
const platform = getPlatformName(os?.name);

const locale = inject<ContextLocaleType>(LocaleContextKey);
</script>

<template>
  <div class="mx-auto max-w-240 flex flex-col gap-8 px-4 pt-12">
    <p class="select-text text-center text-balance text-5xl text-white font-bold sm:text-7xl">
      {{ translate("pages.home.hero.title", locale) }}
      <span class="animate-text-chroma">{{ platform }}</span>
    </p>
  </div>
</template>