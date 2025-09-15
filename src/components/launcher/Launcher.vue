<script setup lang="ts">
import MenuBar from "@/components/launcher/bars/MenuBar.vue";
import NewsBar from "@/components/launcher/bars/NewsBar.vue";
import InstanceBar from "@/components/launcher/instances/InstanceBar.vue";
import StatusBar from "@/components/launcher/bars/StatusBar.vue";
import { provide, readonly, ref } from "vue";
import { ApplicationName as title, LauncherContextKey } from "@/constants/application.ts";
import LauncherModals from "@/components/launcher/misc/LauncherModals.vue";
import { UAParser } from "ua-parser-js";
import { getPlatformName } from "@/lib/helpers/get-platform-name.ts";
import WindowsHeader from "@/components/launcher/headers/WindowsHeader.vue";
import MacHeader from "@/components/launcher/headers/MacHeader.vue";
import LinuxHeader from "@/components/launcher/headers/LinuxHeader.vue";
import type { ContextLauncherType } from "@/types/context-launcher.type.ts";

const { os } = UAParser(navigator.userAgent);
const platform = getPlatformName(os?.name);

const maximized = ref<boolean>(false);
const barStates = ref<{
  "news"    : boolean;
  "status"  : boolean;
  "instance": boolean;
}>({
  "news"    : true,
  "status"  : true,
  "instance": true,
});

function maximize() {
  maximized.value = !maximized.value;
}
function minimize() {
  console.log("minimized!"); // TODO show desktop screen with wallpapers lol
}
function close() {
  console.log("closed!"); // TODO show desktop screen with wallpapers lol
}

provide<ContextLauncherType>(LauncherContextKey, {
  "maximized": readonly(maximized),
  title,
  maximize,
  minimize,
  close,
});
</script>

<template>
  <Teleport to="body" :disabled="!maximized">
    <div
      @contextmenu.prevent
      :class="[
      'w-full flex flex-col gap-0 rounded-md drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] box-border',
      /* Class starts */
      '[background:linear-gradient(45deg,theme(colors.catppuccin.800))_padding-box,conic-gradient(from_var(' +
      '--border-angle),theme(colors.catppuccin.800/.48)_60%,_theme(colors.violet.300)_72%,_theme(' +
      'colors.violet.100)_80%,_theme(colors.violet.300)_88%,_theme(colors.catppuccin.800/.48))_border-box]',
      /* Class ends */
      'border-2 border-transparent animate-border transition duration-300',
      maximized && '!w-auto fixed h-full top-4 left-4 right-4 bottom-4 z-[6000] select-none',
    ]"
    >
      <WindowsHeader v-if="platform === 'Windows'" />
      <MacHeader v-else-if="platform === 'macOS'" />
      <LinuxHeader v-else />
      <div class="w-full flex flex-col gap-0">
        <MenuBar />
        <NewsBar v-if="barStates.news" />
        <InstanceBar :barStates="barStates" />
        <StatusBar v-if="barStates.status" />
      </div>
      <LauncherModals />
    </div>
  </Teleport>
</template>