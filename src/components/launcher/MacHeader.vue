<script setup lang="ts">
import { inject } from "vue";
import { ApplicationName, LauncherContextKey } from "@/constants/application.ts";
import type { ContextLauncherType } from "@/types/context-launcher.type.ts";
import Image from "@/components/base/Image.vue";

const { onlyCloseButton } = defineProps<{
  "onlyCloseButton"?: boolean;
}>();
const { maximized, title, maximize, minimize, close } = inject<ContextLauncherType>(LauncherContextKey) ?? {
  "maximized": false,
  "title"    : ApplicationName,
  "maximize" : () => {},
  "minimize" : () => {},
  "close"    : () => {},
};
</script>

<template>
  <div class="h-6 w-full flex flex-nowrap items-center justify-between gap-2 rounded-t-md bg-catppuccin-900 sm:h-8">
    <div class="h-full flex items-stretch gap-0">
      <button @click="close" class="group grid w-6 place-items-center sm:w-8">
        <span class="grid h-[14px] w-[14px] place-items-center rounded-full bg-[#ff5e54] text-transparent transition-[background-color] sm:h-[18px] sm:w-[18px] group-hover-text-[#700700]">
          <span class="sm:h-18px] h-[14px] w-[14px] sm:w-[18px] -scale-x-100" />
        </span>
      </button>
      <button @click="minimize" class="group grid w-6 place-items-center sm:w-8"></button>
      <button @click="maximize" class="group grid w-6 place-items-center sm:w-8"></button>
    </div>
    <div class="w-fit flex flex-nowrap items-center justify-start gap-2 px-1 sm:px-2">
      <p class="text-nowrap text-xs text-white sm:text-sm">
        {{ title }}
      </p>
    </div>
    <div :class="onlyCloseButton ? 'w-6 sm:w-8' : 'w-18 sm:w-24'" />
  </div>
</template>