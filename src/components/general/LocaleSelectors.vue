<script setup lang="ts">
import { Locales } from "@/constants/locales.ts";
import type { LocaleType } from "@/types/locale.type.ts";
import { useVibrate } from "@vueuse/core";

const { apply, current } = defineProps<{
  "apply"  : ((locale: LocaleType) => void) | undefined;
  "current": LocaleType | undefined;
}>();
const { vibrate } = useVibrate({ "pattern": [15] });

function applyLocale(selected: LocaleType): void {
  apply?.(selected);
  vibrate();
}
</script>

<template>
  <button
    @click="() => applyLocale(locale.Code)"
    v-for="locale in Locales"
    :key="locale.Code"
    :class="[
      'w-full flex flex-nowrap gap-4 px-4 py-3 text-lg',
      'first:rounded-t-3xl first:rounded-b-lg last:rounded-t-lg last:rounded-b-3xl rounded-lg',
      'bg-catppuccin-800 sm:bg-transparent sm:gap-2 sm:!rounded-md sm:px-2 sm:py-1',
      'transition-[background-color] hover:bg-catppuccin-600',
      current === locale.Code && '!bg-catppuccin-600 sm:!bg-catppuccin-800 sm:hover:bg-catppuccin-800',
    ]"
  >
    <span class="max-sm:shrink-0">{{ locale.Flag }}</span>
    <span class="max-sm:w-full max-sm:text-center">{{ locale.Name }}</span>
  </button>
</template>