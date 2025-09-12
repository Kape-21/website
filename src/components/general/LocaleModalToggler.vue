<script setup lang="ts">
import Modal from "@/components/base/Modal.vue";
import World from "@/components/icons/World.vue";
import { Locales } from "@/constants/locales.ts";

const { shown, toggle } = defineProps<{
  "shown" : boolean;
  "toggle": () => void;
}>();
</script>

<template>
  <button
    @click="toggle"
    :class="[
      'group h-full min-w-20 shrink-0 flex flex-col gap-2 justify-center items-center flex-1',
      shown
        ? 'text-white fill-white font-semibold'
        : 'text-[theme(colors.white/.7)] fill-[theme(colors.white/.7)]',
    ]"
  >
    <span
      :class="[
          'relative flex justify-center h-8 rounded-full duration-200 transition-[width,background-color]',
          'group-hover:before:bg-[theme(colors.white/.02)] group-active:before:bg-[theme(colors.white/.02)]',
          'before:w-18 before:h-full before:rounded-full before:absolute before:content-empty',
          shown
            ? 'w-18 bg-catppuccin-600'
            : 'w-8',
        ]"
    >
      <World :active="shown" />
    </span>
    <span class="block pb-1 text-center text-sm leading-none transition-[color] duration-200">
      Locale
    </span>
  </button>
  <Modal
    :shown="shown"
    :toggle="toggle"
    class-names="left-[calc(50%-96px)] top-[calc(50%-128px-40px)]"
  >
    <div class="h-65 w-48 flex flex-col select-none gap-4 p-4">
      <div class="flex flex-nowrap items-center justify-between">
        <p class="text-xl leading-none">
          Locale
        </p>
        <button
          @click="toggle"
          class="grid h-9 w-9 place-items-center rounded-md bg-catppuccin-700"
        >
          <span class="i-lucide-x block h-5 w-5" />
        </button>
      </div>
      <div class="h-[1px] w-full bg-catppuccin-700" />
      <div class="flex flex-col gap-0">
        <button
          v-for="locale in Locales"
          :key="locale.Code"
          class="w-full flex flex-nowrap gap-4 rounded-md px-4 py-3 text-lg transition-[background-color] hover:bg-catppuccin-600"
        >
          <span class="shrink-0">{{ locale.Flag }}</span>
          <span class="w-full text-center">{{ locale.Name }}</span>
        </button>
      </div>
    </div>
  </Modal>
</template>