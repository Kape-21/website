<script setup lang="ts">
import { inject, ref } from "vue";
import { CustomizationTabs } from "@/constants/customization.ts";
import type { ContextLocaleType } from "@/types/context-locale.type.ts";
import { LocaleContextKey } from "@/constants/application.ts";
import { translate } from "@/lib/translations/translate.ts";

const locale = inject<ContextLocaleType>(LocaleContextKey);

const selected = ref<typeof CustomizationTabs[number]["Key"]>("colors");
</script>

<template>
  <div class="mx-auto my-12 max-w-240 flex flex-col gap-4 px-4">
    <div class="w-full flex flex-nowrap gap-4 rounded-md bg-catppuccin-900 p-4">
      <div class="flex shrink-0 flex-col gap-4">
        <button
          @click="selected = tab.Key"
          v-for="tab in CustomizationTabs"
          :key="tab.Key"
          :aria-label="tab.Name"
          :title="tab.Name"
          :class="[
            'grid size-10 place-items-center rounded-md transition-[background-color]',
            selected === tab.Key
              ? 'bg-catppuccin-800'
              : 'bg-catppuccin-900',
          ]"
        >
          <span :class="['block size-6', tab.Icon]" />
        </button>
      </div>
      <div class="w-full flex flex-col gap-4">
        <div class="w-full flex flex-wrap">
          <button>
            {{ translate("pages.home.hero.title", locale) }}
          </button>
        </div>
        <div class="h-full w-full flex flex-col rounded-md">
          <div class="flex flex-nowrap"></div>
          <div class="flex flex-nowrap"></div>
          <div class="flex flex-nowrap justify-between border-t border-[#7a7a7a] bg-[#313131] p-1">
            <div class="flex flex-nowrap items-center gap-1">
              <div class="i-fluent-news-16-regular" />
              <p class="select-text text-sm">
                Freesm Launcher Release Sequoia 1.3.0, now available
              </p>
            </div>
            <div class="flex flex-nowrap items-center gap-1">
              <div class="i-fluent-news-16-regular" />
              <p class="select-text pr-4 text-sm">
                More news
              </p>
            </div>
          </div>
          <div class="flex flex-nowrap justify-between border-t border-[#7a7a7a] bg-[#313131] pt-1">
            <p class="select-text px-1 text-sm">
              No instance selected
            </p>
            <textarea disabled class="max-h-6 min-h-6 w-33 bg-transparent text-sm">Total playtime: 0s</textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>