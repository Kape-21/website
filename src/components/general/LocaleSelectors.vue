<script setup lang="ts">
import { ExtraInfo, Locales } from "@/constants/locales.ts";
import { useVibrate } from "@vueuse/core";
import type { TranslationsType } from "@/types/translations.type.ts";
import type { LocaleType } from "@/types/locale.type.ts";
import { shallowValidateTranslations } from "@/lib/translations/shallow-validate-translations.ts";

const { apply, current } = defineProps<{
  "apply"  : ((translations: TranslationsType) => void) | undefined;
  "current": TranslationsType | undefined;
}>();
const { vibrate } = useVibrate({ "pattern": [15] });

async function applyLocale(selected: LocaleType): Promise<void> {
  try {
    const response = await fetch(`/translations/${selected}.json`);
    const data: unknown = await response.json();
    const validated: TranslationsType = shallowValidateTranslations(data);

    apply?.(validated);
    vibrate();
  } catch (error) {
    console.error(`Couldn't retrieve translations for '${selected}':`, error);
  }
}
</script>

<template>
  <button
    v-for="locale in Locales"
    :key="locale"
    @click="() => applyLocale(locale)"
    :class="[
      'w-full flex flex-nowrap gap-4 px-4 py-3 text-lg',
      'first:rounded-t-3xl first:rounded-b-md last:rounded-t-md last:rounded-b-3xl rounded-md',
      'bg-catppuccin-800 sm:bg-transparent sm:gap-2 sm:!rounded-md sm:px-2 sm:py-1',
      'transition-[background-color] hover:bg-catppuccin-600',
      current?.Info?.Code === locale && '!bg-catppuccin-600 sm:!bg-catppuccin-800 sm:hover:bg-catppuccin-800',
    ]"
  >
    <span class="max-sm:shrink-0">{{ ExtraInfo[locale].Flag }}</span>
    <span class="max-sm:w-full max-sm:text-center">{{ ExtraInfo[locale].Name }}</span>
  </button>
</template>