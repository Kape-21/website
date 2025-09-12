<script setup lang="ts">
import Modal from "@/components/base/Modal.vue";
import World from "@/components/icons/World.vue";

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
  >
    Hellooo
  </Modal>
</template>