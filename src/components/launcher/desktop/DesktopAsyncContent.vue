<script setup lang="ts">
import Image from "@/components/base/Image.vue";
import { onMounted, onUnmounted, ref } from "vue";
import { useIntervalFn } from "@vueuse/core";
import { WebTerm } from "web-term-ui";
import LinuxHeader from "@/components/launcher/headers/LinuxHeader.vue";
import { DesktopTerminalContextKey } from "@/constants/application.ts";

const { open } = defineProps<{
  "open": () => void;
}>();

const currentDate = ref<Date>(new Date);
const { pause } = useIntervalFn(() => {
  currentDate.value = new Date;
}, 1000);

const apps = ref<{
  "terminal": boolean;
}>({
  "terminal": false,
});

onUnmounted(pause);
onMounted(() => {
  const term = new WebTerm({
    "title"    : "Welcome",
    "container": "#__web-terminal",
    "header"   : "$ ",
    "style"    : {
      "background": "transparent",
      "color"     : "#bfc6ce",
    },
  });

  term.on("tab", () => {
    term.insertText("Hello");
  });
});
</script>

<template>
  <div>
    <Image
      class-names="absolute left-0 top-0 right-0 bottom-0 brightness-70 w-full h-full object-cover"
      src="/assets/temple-os-elephant.webp"
      alt="Temple OS elephant"
    />
    <button
      aria-label="Open Freesm Launcher"
      @dblclick="open"
      class="absolute left-2 top-2 h-24 w-24 flex flex-col items-center justify-center gap-2 border border-transparent rounded-md focus:border-mauve focus:bg-[theme(colors.mauve/.4)]"
    >
      <Image
        class-names="h-12 w-12 drop-shadow-md"
        src="/favicon.webp"
        alt="Freesm Launcher logo"
      />
      <span class="block max-w-12 text-center text-xs font-semibold leading-none text-shadow-xl">
        Freesm Launcher
      </span>
    </button>
    <div class="absolute bottom-2 left-2 right-2 h-12 flex justify-between rounded-lg bg-[#eff0f1] text-black">
      <div class="h-full flex flex-nowrap items-center gap-0">
        <button class="grid h-12 w-12 place-items-center">
          <Image
            class-names="h-6"
            src="/assets/simple-icons-kde-plasma.svg"
            alt="KDE Plasma logo"
          />
        </button>
        <button @click="() => apps.terminal = !apps.terminal" class="grid h-12 w-12 place-items-center">
          <span class="i-lucide-terminal block h-8 w-8" />
        </button>
      </div>
      <div class="h-full flex flex-nowrap items-center gap-2">
        <div class="flex flex-col items-center gap-0 px-4">
          <p class="text-sm font-semibold">
            {{ currentDate.toLocaleTimeString() }}
          </p>
          <p class="text-xs">
            {{ currentDate.toLocaleDateString() }}
          </p>
        </div>
      </div>
    </div>
    <Transition css name="slide-fade">
      <div
        v-show="apps.terminal"
        class="absolute left-[20%] top-[20%] h-[60%] w-[60%] flex flex-col gap-0 rounded-md bg-catppuccin-900"
      >
        <LinuxHeader :context-key="DesktopTerminalContextKey" />
        <div id="__web-terminal" class="h-full" />
      </div>
    </Transition>
  </div>
</template>