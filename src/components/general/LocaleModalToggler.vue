<script setup lang="ts">
import Modal from "@/components/base/Modal.vue";
import World from "@/components/icons/World.vue";
import { inject } from "vue";
import { LocaleContextKey, LocaleSelectorContextKey } from "@/constants/application.ts";
import { translate } from "@/lib/translations/translate.ts";
import type { ContextLocaleType } from "@/types/context-locale.type.ts";
import type { LocaleSelectorType } from "@/types/locale-selector.type.ts";
import LocaleSelectors from "@/components/general/LocaleSelectors.vue";
import { useAccentAnimation } from "@/lib/stores/misc/accent-animations.ts";

const currentLocale = inject<ContextLocaleType>(LocaleContextKey);
const selectLocale = inject<LocaleSelectorType>(LocaleSelectorContextKey);

const { shown, toggle } = defineProps<{
  "shown" : boolean;
  "toggle": () => void;
}>();

const accentAnimationStore = useAccentAnimation();
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
      {{ translate("general.locale", currentLocale) }}
    </span>
  </button>
  <Modal
    :shown="shown"
    :toggle="toggle"
    class-names="left-[calc(50%-96px)] top-[calc(50%-179px-40px)]"
  >
    <div class="h-fit w-48 flex flex-col select-none gap-4 p-4">
      <div class="flex flex-nowrap items-center justify-between">
        <p class="text-xl leading-none">
          {{ translate("general.locale", currentLocale) }}
        </p>
        <button
          @click="toggle"
          class="grid h-9 w-9 place-items-center rounded-full bg-catppuccin-700"
        >
          <span class="i-lucide-x block h-5 w-5" />
        </button>
      </div>
      <div class="h-[1px] w-full bg-catppuccin-700" />
      <div class="flex flex-col gap-2">
        <LocaleSelectors :apply="selectLocale" :current="currentLocale" />
      </div>
      <div class="h-[1px] w-full bg-catppuccin-700" />
      <button
        @click="accentAnimationStore.toggle"
        :class="[
          'w-full flex flex-nowrap items-center gap-4 px-4 py-3 text-lg rounded-3xl',
          'transition-[background-color] hover:bg-catppuccin-600',
          accentAnimationStore.enabled
            ? 'bg-catppuccin-600'
            : 'bg-catppuccin-800',
        ]"
      >
        <span class="i-lucide-palette block size-5 shrink-0" />
        <span class="max-sm:w-full max-sm:text-center">
          Animations
        </span>
      </button>
    </div>
  </Modal>
</template>