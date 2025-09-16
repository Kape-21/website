<script setup lang="ts">
import Image from "@/components/base/Image.vue";

const { open } = defineProps<{
  "open": () => void;
}>();

const currentDate = new Date;
</script>

<template>
  <div
    class="absolute h-full w-full overflow-hidden rounded-lg bg-[url('/assets/temple-os-elephant.webp')] bg-cover bg-center text-black -z-10"
  >
    <button
      aria-label="Open Freesm Launcher"
      @dblclick="open"
      class="absolute left-4 top-4 flex flex-col items-center gap-2 focus:grayscale-60"
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
    <div class="absolute bottom-2 left-2 right-2 h-12 flex justify-between rounded-lg bg-[#eff0f1]">
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
            {{ `${currentDate.getHours()}:${currentDate.getMinutes()}` }}
          </p>
          <p class="text-xs">
            {{ `${currentDate.getMonth()}/${currentDate.getDay()}/${currentDate.getFullYear()}` }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>