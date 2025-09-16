<script setup lang="ts">
import MenuBar from "@/components/launcher/bars/MenuBar.vue";
import NewsBar from "@/components/launcher/bars/NewsBar.vue";
import InstanceBar from "@/components/launcher/instances/InstanceBar.vue";
import StatusBar from "@/components/launcher/bars/StatusBar.vue";
import { provide, readonly, ref } from "vue";
import { ApplicationName as title, LauncherContextKey } from "@/constants/application.ts";
import DeleteConfirmationModal from "@/components/launcher/modals/DeleteConfirmationModal.vue";
import { UAParser } from "ua-parser-js";
import { getPlatformName } from "@/lib/helpers/get-platform-name.ts";
import WindowsHeader from "@/components/launcher/headers/WindowsHeader.vue";
import MacHeader from "@/components/launcher/headers/MacHeader.vue";
import LinuxHeader from "@/components/launcher/headers/LinuxHeader.vue";
import type { ContextLauncherType } from "@/types/context-launcher.type.ts";
import GameModal from "@/components/launcher/modals/GameModal.vue";
import DesktopWrapper from "@/components/launcher/desktop/DesktopWrapper.vue";

const { os } = UAParser(navigator.userAgent);
const platform = getPlatformName(os?.name);

const maximized = ref<boolean>(false);
const minimized = ref<boolean>(false);
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
  minimized.value = true;
}
function unMinimize() {
  minimized.value = false;
}

provide<ContextLauncherType>(LauncherContextKey, {
  "maximized": readonly(maximized),
  "close"    : minimize,
  title,
  maximize,
  minimize,
});
</script>

<template>
  <Teleport to="body" :disabled="!maximized">
    <div
      @contextmenu.prevent
      :class="[
        'w-full rounded-md drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] box-border',
        /* Class starts */
        '[background:linear-gradient(45deg,theme(colors.catppuccin.800))_padding-box,conic-gradient(from_' +
        'var(--border-angle),theme(colors.catppuccin.800/.48)_60%,_theme(colors.violet.300)_72%,_theme(' +
        'colors.violet.100)_80%,_theme(colors.violet.300)_88%,_theme(colors.catppuccin.800/.48))_border-box]',
        /* Class ends */
        'border-2 border-transparent animate-border transition duration-300',
        maximized
          ? '!w-auto fixed top-4 left-4 right-4 z-[6000] select-none'
          : 'relative',
      ]"
    >
      <DesktopWrapper v-if="minimized" :open="unMinimize" />
      <div :class="['flex flex-col gap-0', minimized && 'invisible']">
        <WindowsHeader :context-key="LauncherContextKey" v-if="platform === 'Windows'" />
        <MacHeader :context-key="LauncherContextKey" v-else-if="platform === 'macOS'" />
        <LinuxHeader :context-key="LauncherContextKey" v-else />
        <div class="w-full flex flex-col gap-0">
          <MenuBar
            :bar-states="barStates"
            :toggle-news="() => barStates.news = !barStates.news"
            :toggle-instance="() => barStates.instance = !barStates.instance"
            :toggle-status="() => barStates.status = !barStates.status"
          />
          <NewsBar v-if="barStates.news" />
          <InstanceBar :barStates="barStates" />
          <StatusBar v-if="barStates.status" />
        </div>
      </div>
      <DeleteConfirmationModal />
      <GameModal />
    </div>
  </Teleport>
</template>