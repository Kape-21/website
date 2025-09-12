<script setup lang="ts">
import { inject, ref, useTemplateRef } from "vue";
import { Locales } from "@/constants/locales.ts";
import type { ContextLocaleType } from "@/types/context-locale.type.ts";
import { LocaleContextKey, LocaleSelectorContextKey } from "@/constants/application.ts";
import type { LocaleSelectorType } from "@/types/locale-selector.type.ts";
import { onClickOutside } from "@vueuse/core";

const opened = ref<boolean>(false);

const currentLocale = inject<ContextLocaleType>(LocaleContextKey);
const selectLocale = inject<LocaleSelectorType>(LocaleSelectorContextKey);

function toggleMenu() {
  opened.value = !opened.value;
}

const target = useTemplateRef<HTMLElement>("target");

onClickOutside(target, event => {
  if (event.target === null || !("id" in event.target)) {
    return;
  }

  if (event.target.id === "__locale-selector") {
    return;
  }

  opened.value = false;
});
</script>

<template>
  <div class="relative">
    <button
      id="__locale-selector"
      @mousedown="toggleMenu"
      class="grid size-8 place-items-center rounded-full bg-catppuccin-800 transition-[background-color] active:cursor-default hover:bg-catppuccin-600"
    >
      {{ Locales.find(({ Code }) => Code === currentLocale)?.Flag }}
    </button>
    <Transition name="slide-fade">
      <div ref="target" v-show="opened" class="absolute right-0 top-10 flex flex-col items-start border border-catppuccin-600 rounded-md bg-catppuccin-900 p-1">
        <button
          @click="() => selectLocale?.(locale.Code)"
          v-for="locale in Locales"
          :key="locale.Code"
          :disabled="currentLocale === locale.Code"
          :class="[
            'w-full flex flex-nowrap gap-2 rounded-md px-2 py-1',
            'transition-[background-color] hover:bg-catppuccin-600',
            currentLocale === locale.Code && 'bg-catppuccin-800 hover:bg-catppuccin-800',
          ]"
        >
          <span>{{ locale.Flag }}</span>
          <span>{{ locale.Name }}</span>
        </button>
      </div>
    </Transition>
  </div>
</template>