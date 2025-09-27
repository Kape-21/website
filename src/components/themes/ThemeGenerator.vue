<script setup lang="ts">
import { inject, ref } from "vue";
import { CustomizationTabs } from "@/constants/customization.ts";
import type { ContextLocaleType } from "@/types/context-locale.type.ts";
import { LocaleContextKey } from "@/constants/application.ts";
import { translate } from "@/lib/translations/translate.ts";
import Image from "@/components/base/Image.vue";

const instanceButtons = [
  { "name": "Launch", "icon": "i-lucide-play" },
  { "name": "Kill", "icon": "i-lucide-x" },
  { "name": "Edit", "icon": "i-lucide-edit" },
  { "name": "Change Group", "icon": "i-lucide-bookmark" },
  { "name": "Folder", "icon": "i-lucide-folder" },
];

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
          <div class="flex flex-nowrap bg-[#222222]">
            <div class="w-full flex flex-col gap-2 p-1">
              <div class="flex flex-nowrap items-center gap-1">
                <div class="i-lucide-chevron-down size-6 shrink-0 text-[#a7a7a7]" />
                <div class="shrink-0 text-[13px] text-[#a7a7a7] font-bold">
                  Ungrouped
                </div>
                <div class="ml-1 h-[2px] w-full bg-[#2d2d2d]" />
              </div>
              <div class="w-fit flex flex-col items-center gap-2">
                <Image
                  class-names="size-12"
                  src="/assets/grass.svg"
                  alt="Grass SVG icon"
                />
                <div class="grid w-24 place-items-center bg-[#96db59] py-[5px] text-xs text-black leading-none">
                  1.21.8
                </div>
              </div>
            </div>
            <div class="h-full w-39 flex flex-col items-center border-l border-[#7a7a7a] bg-[#323232]">
              <Image class-names="size-20" src="/assets/grass.svg" alt="Grass SVG icon" />
              <div class="py-2 text-xs leading-none">
                1.21.8
              </div>
              <div
                v-for="button in instanceButtons"
                :key="button.name"
                class="w-full flex flex-nowrap items-center justify-between p-1"
              >
                <div class="flex flex-nowrap items-center gap-1">
                  <div :class="['size-4', button.icon]" />
                  <div class="text-xs">
                    {{ button.name }}
                  </div>
                </div>
                <div v-if="button.name === 'Launch'" class="i-fluent-caret-down-16-filled size-3 bg-[#7a7a7a]"></div>
              </div>
              <div class="w-full h-8" />
            </div>
          </div>
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