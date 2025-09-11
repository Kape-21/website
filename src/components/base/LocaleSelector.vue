<script setup lang="ts">
import { ref } from "vue";
import { Locales } from "@/constants/locales.ts";
import type { LocaleType } from "@/types/locale.type.ts";

const opened = ref<boolean>(false);
const selected: LocaleType = "en";

function toggleMenu() {
  opened.value = !opened.value;
}
</script>

<template>
  <div class="relative">
    <button
      @mousedown="toggleMenu"
      class="grid size-8 place-items-center rounded-full bg-catppuccin-800 transition-[background-color] active:cursor-default hover:bg-catppuccin-600"
    >
      {{ Locales.find(({ Code }) => Code === selected)?.Flag }}
    </button>
    <Transition name="slide-fade">
      <div v-show="opened" class="absolute right-0 top-10 flex flex-col items-start border border-catppuccin-600 rounded-md bg-catppuccin-900 p-1">
        <button
          v-for="locale in Locales"
          :key="locale.Code"
          class="w-full flex flex-nowrap gap-2 rounded-md px-2 py-1 transition-[background-color] hover:bg-catppuccin-600"
        >
          <span>{{ locale.Flag }}</span>
          <span>{{ locale.Name }}</span>
        </button>
      </div>
    </Transition>
  </div>
</template>