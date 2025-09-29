<script setup lang="ts">
import { inject, ref } from "vue";
import { CustomizationTabs } from "@/constants/customization.ts";
import type { ContextLocaleType } from "@/types/context-locale.type.ts";
import { LocaleContextKey } from "@/constants/application.ts";
import { translate } from "@/lib/translations/translate.ts";
import Image from "@/components/base/Image.vue";

const buttons = {
  "instance": [
    { "name": "Launch", "icon": "i-lucide-play" },
    { "name": "Kill", "icon": "i-lucide-x" },
    { "name": "Edit", "icon": "i-lucide-edit" },
    { "name": "Change Group", "icon": "i-lucide-bookmark" },
    { "name": "Folder", "icon": "i-lucide-folder" },
  ],
  "menu": [
    { "name": "Add Instance", "icon": "i-lucide-plus" },
    { "name": "Folders", "icon": "i-lucide-folder" },
    { "name": "Settings", "icon": "i-lucide-settings" },
    { "name": "Help", "icon": "i-lucide-circle-question-mark" },
    { "name": "Update", "icon": "i-lucide-cloud" },
  ],
};

const locale = inject<ContextLocaleType>(LocaleContextKey);

const selected = ref<typeof CustomizationTabs[number]["Key"]>("colors");
</script>

<template>
  <div class="mx-auto my-12 max-w-240 flex flex-col gap-4 px-4">
    <div class="w-full flex flex-nowrap gap-0 rounded-md bg-catppuccin-900">
      <div class="flex shrink-0 flex-col gap-0">
        <button
          @click="selected = tab.Key"
          v-for="tab in CustomizationTabs"
          :key="tab.Key"
          :aria-label="tab.Name"
          :title="tab.Name"
          class="group px-4 py-2 first:pt-4"
        >
          <span
            :class="[
              'grid size-10 place-items-center rounded-md transition-[background-color]',
              'group-hover:bg-catppuccin-800',
              selected === tab.Key
                ? 'bg-catppuccin-800'
                : 'bg-catppuccin-900',
            ]"
          >
            <span :class="['block size-6', tab.Icon]" />
          </span>
        </button>
      </div>
      <div class="w-full flex flex-col gap-4 py-4 pr-4">
        <div class="w-full flex flex-wrap">
          <button>
            {{ translate("pages.home.hero.title", locale) }}
          </button>
        </div>
        <div class="h-full w-full flex flex-col border-x border-[#7a7a7a]">
          <div class="flex flex-nowrap items-center justify-between border-t border-[#7a7a7a] bg-[#313131] p-1">
            <div class="flex flex-nowrap items-center gap-2">
              <div
                v-for="button in buttons.menu"
                :key="button.name"
                class="flex flex-nowrap items-center"
              >
                <div :class="['size-6', button.icon]" />
                <div class="text-xs">
                  {{ button.name }}
                </div>
              </div>
            </div>
            <div class="flex flex-nowrap items-center">
              <Image class-names="size-6" src="/skins/monochrome_steve.png" alt="" />
              <div class="text-xs">
                Accounts
              </div>
            </div>
          </div>
          <div class="flex flex-nowrap border-t border-[#7a7a7a] bg-[#222222]">
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
              <Image class-names="size-20 mt-2" src="/assets/grass.svg" alt="Grass SVG icon" />
              <div class="py-2 text-xs leading-none">
                1.21.8
              </div>
              <div
                v-for="button in buttons.instance"
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
              <div class="h-8 w-full" />
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
          <div class="flex flex-nowrap justify-between border-y border-[#7a7a7a] bg-[#313131] pt-1">
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