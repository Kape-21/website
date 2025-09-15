<script setup lang="ts">
import WindowsHeader from "@/components/launcher/headers/WindowsHeader.vue";
import MacHeader from "@/components/launcher/headers/MacHeader.vue";
import LinuxHeader from "@/components/launcher/headers/LinuxHeader.vue";
import { UAParser } from "ua-parser-js";
import { getPlatformName } from "@/lib/helpers/get-platform-name.ts";

const { os } = UAParser(navigator.userAgent);
const platform = getPlatformName(os?.name);

const { opened, contextKey, onlyCloseButton, useTeleport } = defineProps<{
  "opened"          : boolean;
  "contextKey"      : symbol;
  "onlyCloseButton"?: boolean;
  "useTeleport"?    : boolean;
}>();
</script>

<template>
  <Teleport to="body" :disabled="!useTeleport">
    <div
      :class="[
      'absolute z-1500 flex flex-col gap-0 rounded-md',
      'bg-catppuccin-900 text-white transition-[opacity,transform] duration-300',
      useTeleport
        ? 'left-0 top-0 right-0 bottom-0'
        : 'left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]',
      opened
        ? 'visible opacity-100 scale-100'
        : 'invisible opacity-0 scale-85',
    ]"
    >
      <WindowsHeader
        v-if="platform === 'Windows'"
        :context-key="contextKey"
        :only-close-button="onlyCloseButton"
      />
      <MacHeader
        v-else-if="platform === 'macOS'"
        :context-key="contextKey"
        :only-close-button="onlyCloseButton"
      />
      <LinuxHeader
        v-else
        :context-key="contextKey"
        :only-close-button="onlyCloseButton"
      />
      <slot />
    </div>
  </Teleport>
</template>