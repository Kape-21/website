<script setup lang="ts">
import { ref } from "vue";
import { CustomizationTabs } from "@/constants/customization.ts";

const selected = ref<typeof CustomizationTabs[number]["Key"]>();
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
            hi
          </button>
        </div>
        <div class="h-full w-full rounded-md"></div>
      </div>
    </div>
  </div>
</template>