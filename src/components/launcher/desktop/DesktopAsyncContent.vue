<script setup lang="ts">
import Image from "@/components/base/Image.vue";
import { onUnmounted, ref } from "vue";
import { useIntervalFn } from "@vueuse/core";

const { open } = defineProps<{
  "open": () => void;
}>();

const currentDate = ref<Date>(new Date);
const { pause } = useIntervalFn(() => {
  currentDate.value = new Date;
}, 1000);

onUnmounted(pause);
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
      <div class="h-full flex flex-nowrap items-center gap-2">
        <div class="grid h-12 w-12 place-items-center">
          <Image
            class-names="h-6"
            src="/assets/simple-icons-kde-plasma.svg"
            alt="KDE Plasma logo"
          />
        </div>
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
  </div>
</template>