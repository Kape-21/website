<script setup lang="ts">
import { DefaultColors } from "@/constants/customization.ts";
import { computed } from "vue";
import { useDebounceFn } from "@vueuse/core";

const { colors, setColor, resetColors } = defineProps<{
  "colors"  : typeof DefaultColors;
  "setColor": ({
    key,
    color,
  }: {
    "key"  : keyof typeof DefaultColors;
    "color": typeof DefaultColors[keyof typeof DefaultColors];
  }) => void;
  "resetColors": () => void;
}>();
const colorEntries = computed(() => Object.entries(colors));

const handleColorInput = useDebounceFn(({ target }: { "target": unknown }) => {
  const data = target as Partial<{ "name": keyof typeof DefaultColors; "value": string }>;

  setColor({
    "key"  : data?.name ?? "AlternateBase",
    "color": data?.value ?? "#000000",
  });
}, 300);
</script>

<template>
  <div class="grid cols-1 w-full gap-0 gap-2 lg:cols-3 sm:cols-2">
    <button @click="resetColors" class="w-fit flex flex-nowrap items-center gap-4 rounded-md p-2 transition-[background-color] hover:bg-catppuccin-800">
      <span class="i-lucide-rotate-ccw block size-6" />
      <span class="block text-gray-400 font-medium">
        Reset
      </span>
    </button>
    <div
      v-for="[name, color] in colorEntries"
      :key="name"
      class="flex flex-nowrap items-center gap-2"
    >
      <input
        class="size-10 shrink-0 cursor-pointer rounded-md bg-catppuccin-800 p-2"
        type="color"
        @input="handleColorInput"
        :name="name"
        :value="color"
      />
      <p class="text-gray-400 font-medium">
        {{ name }}
      </p>
    </div>
  </div>
</template>