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
    <div class="flex flex-nowrap items-center gap-2 px-1 sm:px-2">
      <Image
        class-names="h-4 w-4 sm:h-5 sm:w-5"
        src="/favicon.webp"
        :alt="`${ApplicationName}'s logo`"
      />
      <p class="text-nowrap text-xs text-white sm:text-sm">
        {{ title }}
      </p>
    </div>
    <div class="h-full flex items-stretch gap-0">
      <template v-if="!onlyCloseButton">
        <button @click="minimize" class="group grid w-8 cursor-default place-items-center transition-[background-color] sm:w-12 hover:bg-[#e5e5e5]">
          <span class="block h-[1px] w-2 bg-[#999] transition-[background-color] sm:w-[10px] group-hover:bg-black" />
        </button>
        <button @click="maximize" class="group grid w-8 cursor-default place-items-center transition-[background-color] sm:w-12 hover:bg-[#e5e5e5]">
          <span v-if="maximized" class="relative block"></span>
          <span v-else class="block h-2 w-2 border border-[#999] transition-[border-color] sm:h-[10px] sm:w-[10px] group-hover:border-black" />
        </button>
      </template>
      <button @click="close" class="group grid w-8 cursor-default place-items-center rounded-tr-md transition-[background-color] sm:w-12 hover:bg-[#e81123]">
        <span class="relative right-[6px] block">
          <span class="absolute left-[50%] top-[50%] block h-[1px] w-[10px] rotate-45 bg-[#999] transition-[background-color] sm:w-[13px] group-hover:bg-white" />
          <span class="absolute left-[50%] top-[50%] h-[1px] w-[10px] rotate-135 bg-[#999] transition-[background-color] sm:w-[13px] group-hover:bg-white" />
        </span>
      </button>
    </div>
  </div>
</template>