<script setup lang="ts">
import WindowHeader from "@/components/launcher/WindowHeader.vue";
import MenuBar from "@/components/launcher/MenuBar.vue";
import NewsBar from "@/components/launcher/NewsBar.vue";
import InstanceBar from "@/components/launcher/InstanceBar.vue";
import StatusBar from "@/components/launcher/StatusBar.vue";
import { provide, ref } from "vue";
import { LauncherContextKey } from "@/constants/application.ts";
import LauncherModals from "@/components/launcher/LauncherModals.vue";

const maximized = ref<boolean>(false);
const animation = ref<"animate-shake" | "">("");
const barStates = ref<{
  "news"  : boolean;
  "status": boolean;
}>({
  "news"  : true,
  "status": true,
});

function maximize() {
  maximized.value = !maximized.value;
}
function minimize() {
  console.log("minimized!"); // TODO show desktop screen with wallpapers lol
}
function close() {
  if (animation.value === "animate-shake") {
    return;
  }

  animation.value = "animate-shake";

  setTimeout(() => {
    animation.value = "";
  });
}

provide<{
  "maximize": () => void;
  "minimize": () => void;
  "close"   : () => void;
}>(LauncherContextKey, { maximize, minimize, close });
</script>

<template>
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
      animation, maximized && 'fixed top-0 left-0 right-0 bottom-0 z-[6000]',
    ]"
  >
    <WindowHeader />
    <div :class="['w-full flex flex-col gap-0', maximized && 'h-svh']">
      <MenuBar />
      <NewsBar v-if="barStates.news" />
      <InstanceBar />
      <StatusBar v-if="barStates.status" />
    </div>
    <LauncherModals />
  </div>
</template>