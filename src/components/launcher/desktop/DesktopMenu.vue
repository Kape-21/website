<script setup lang="ts">
import Image from "@/components/base/Image.vue";
import { onClickOutside } from "@vueuse/core";
import { useTemplateRef } from "vue";

const { open, closeMenu } = defineProps<{
  "open"     : () => void;
  "closeMenu": () => void;
}>();
const target = useTemplateRef<HTMLElement>("target");

onClickOutside(target, event => {
  // Don't close the menu if user click on the KDE menu button
  if (event.target !== null && "id" in event.target && event.target.id === "__kde-menu-opener") {
    return;
  }

  closeMenu();
});
</script>

<template>
  <div
    ref="target"
    class="absolute bottom-18 left-2 flex flex-col gap-0 overflow-hidden rounded-md bg-[#eff0f1] text-black"
  >
    <div class="flex flex-nowrap items-center gap-2 border-b-2 border-[#d4d6d7] bg-[#e3e5e7] p-2">
      <Image
        class-names="w-8 h-8 rounded-full border-2 border-mauve box-content"
        src="/ame-chan.jpg"
        alt="Ame-Chan from Needy Streamer Overload"
      />
      <p class="">
        Ame-chan
      </p>
    </div>
    <div class="flex flex-nowrap gap-0 border-b-2 border-[#d4d6d7]">
      <div class="flex flex-col border-r-2 border-[#d4d6d7] p-2">
        <div class="flex flex-nowrap items-center gap-2 border border-mauve rounded-md p-2 sm:min-w-36 bg-[theme(colors.mauve/.5)]">
          <div class="i-lucide-bookmark h-4 w-4" />
          <p class="text-sm">
            Favorites
          </p>
        </div>
      </div>
      <div class="flex p-2 sm:min-w-56">
        <button
          aria-label="Open Freesm Launcher"
          @click="open"
          class="h-24 w-24 flex flex-col items-center justify-center gap-2 border border-transparent rounded-md hover:border-mauve hover:bg-[theme(colors.mauve/.4)]"
        >
          <Image
            class-names="h-12 w-12"
            src="/favicon.webp"
            alt="Freesm Launcher logo"
          />
          <span class="block max-w-12 text-center text-xs font-semibold leading-none">
        Freesm Launcher
      </span>
        </button>
      </div>
    </div>
    <div class="h-9 w-full flex justify-between px-2">
      <div class="flex flex-nowrap items-center gap-2 border-t-4 border-mauve px-2">
        <div class="i-lucide-grid-2x2 h-4 w-4" />
        <p class="text-sm">
          Applications
        </p>
      </div>
    </div>
  </div>
</template>