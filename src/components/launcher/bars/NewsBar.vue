<script setup lang="ts">
import { inject } from "vue";
import type { ContextLocaleType } from "@/types/context-locale.type.ts";
import { LocaleContextKey } from "@/constants/application.ts";
import { translate } from "@/lib/translations/translate.ts";

const locale = inject<ContextLocaleType>(LocaleContextKey);
</script>

<template>
  <div class="h-10 w-full flex items-stretch justify-stretch gap-2 bg-[#09090e] p-[10px]">
    <div class="animated-accent-background w-[5px] cursor-move rounded-full transition-[background-color] duration-2000 ease-linear" />
    <div class="w-full flex flex-nowrap items-center gap-1 rounded-md px-1 text-nowrap text-[10px] text-[#cdd6f4] transition-[background-color] hover:bg-[#1a1723] sm:text-[13px]">
      <div class="i-fluent-news-16-regular w-4 shrink-0" />
      <p class="w-fit text-nowrap">
        {{ translate("launcher.website-in-vue", locale) }}
      </p>
    </div>
    <div class="w-fit flex flex-nowrap items-center gap-1 rounded-md px-1 text-nowrap text-[10px] text-[#cdd6f4] transition-[background-color] hover:bg-[#1a1723] sm:text-[13px]">
      <div class="i-fluent-news-16-regular w-4 shrink-0" />
      <p class="min-w-20 text-nowrap">
        {{ translate("launcher.more-news", locale) }}
      </p>
    </div>
  </div>
</template>