<script setup lang="ts">
import { Locales } from "@/constants/locales.ts";
import type { LocaleType } from "@/types/locale.type.ts";

const { apply, current } = defineProps<{
  "apply"  : ((locale: LocaleType) => void) | undefined;
  "current": LocaleType | undefined;
}>();
</script>

<template>
  <button
    @click="() => apply?.(locale.Code)"
    v-for="locale in Locales"
    :key="locale.Code"
    :class="[
            'w-full flex flex-nowrap gap-4 rounded-full px-4 py-3 text-lg sm:gap-2 sm:rounded-md sm:px-2 sm:py-1',
            'transition-[background-color] hover:bg-catppuccin-600',
            current === locale.Code && 'bg-catppuccin-800 hover:bg-catppuccin-800',
          ]"
  >
    <span class="max-sm:shrink-0">{{ locale.Flag }}</span>
    <span class="max-sm:w-full max-sm:text-center">{{ locale.Name }}</span>
  </button>
</template>