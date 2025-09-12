<script setup lang="ts">
import { ref } from "vue";
import Modal from "@/components/base/Modal.vue";
import Compass from "@/components/icons/Compass.vue";

const shown = ref<boolean>(false);

function toggleModal() {
  shown.value = !shown.value;

  const htmlTag = document.getElementById("__html-tag");

  if (htmlTag === null) {
    return;
  }

  htmlTag.style.overflowY = htmlTag.style.overflowY === "hidden"
    ? "auto"
    : "hidden";
}
</script>

<template>
  <button
    @click="toggleModal"
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
      <Compass :active="shown" />
    </span>
    <span class="block pb-1 text-center text-sm leading-none transition-[color] duration-200">
      Locale
    </span>
  </button>
  <Modal
    :shown="shown"
    :toggle="toggleModal"
  >
    Hellooo
  </Modal>
</template>