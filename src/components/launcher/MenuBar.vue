<script setup lang="ts">
import { LauncherTabs } from "@/constants/launcher.ts";
import { translate } from "@/lib/translations/translate.ts";
import { inject } from "vue";
import type { ContextLocaleType } from "@/types/context-locale.type.ts";
import { LocaleContextKey } from "@/constants/application.ts";

const locale = inject<ContextLocaleType>(LocaleContextKey);

const catPackEnabled = true;
</script>

<template>
  <div class="h-fit w-full flex justify-between bg-catppuccin-900 p-[10px]">
    <!-- TODO context menu? -->
    <div class="flex flex-wrap items-stretch gap-2">
      <div class="w-[5px] cursor-move rounded-full bg-mauve" />
      <button
        v-for="tab in LauncherTabs"
        :key="tab.Icon"
        :disabled="tab?.Disabled"
        :class="[
          'min-h-8 flex items-center gap-1 rounded-md px-1 py-1 transition-[background-color] ease-out',
          'sm:min-h-10 sm:px-2 sm:py-0 hover:bg-[#211e2f] active:bg-[#171721]',
          'disabled:text-[#9298b6] disabled:transition-none',
          'disabled:hover:bg-transparent disabled:active:bg-transparent',
          // Check if the button is a Cat Pack button
          tab?.Name === undefined && catPackEnabled && 'bg-[#211e2f]',
        ]"
      >
        <span class="block min-w-6">
          <span :class="[
            'block h-4 sm:h-8 w-6',
            tab?.Icon,
          ]" />
        </span>
        <span
          v-if="tab?.Name"
          class="block text-nowrap text-[10px] text-[#cdd6f4] sm:text-[13px] disabled:text-[#9298b6]"
        >
            {{ translate(tab.Name, locale) }}
          </span>
      </button>
    </div>
  </div>
</template>