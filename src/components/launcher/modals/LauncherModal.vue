<script setup lang="ts">
import WindowsHeader from "@/components/launcher/headers/WindowsHeader.vue";
import MacHeader from "@/components/launcher/headers/MacHeader.vue";
import LinuxHeader from "@/components/launcher/headers/LinuxHeader.vue";
import { UAParser } from "ua-parser-js";
import { getPlatformName } from "@/lib/helpers/get-platform-name.ts";

const { os } = UAParser(navigator.userAgent);
const platform = getPlatformName(os?.name);

const { opened, contextKey } = defineProps<{
  "opened"    : boolean;
  "contextKey": symbol;
}>();
</script>

<template>
  <div
    :class="[
      'absolute left-[50%] top-[50%] z-1500 flex flex-col gap-0 rounded-md',
      'bg-catppuccin-900 text-white transition-[opacity,transform] duration-300',
      'translate-x-[-50%] translate-y-[-50%]',
      opened
        ? 'visible opacity-100 scale-100'
        : 'invisible opacity-0 scale-85',
    ]"
  >
    <WindowsHeader
      :context-key="contextKey"
      v-if="platform === 'Windows'"
      only-close-button
    />
    <MacHeader
      :context-key="contextKey"
      v-else-if="platform === 'macOS'"
      only-close-button
    />
    <LinuxHeader
      :context-key="contextKey"
      only-close-button
      v-else
    />
    <slot />
  </div>
</template>