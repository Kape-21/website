<script setup lang="ts">
import { ref } from "vue";
import { CustomizationTabs } from "@/constants/customization.ts";
import ColorGenerator from "@/components/themes/ColorGenerator.vue";
import GeneralStyler from "@/components/themes/GeneralStyler.vue";
import ButtonsStyler from "@/components/themes/ButtonsStyler.vue";
import InputsStyler from "@/components/themes/InputsStyler.vue";
import OthersStyler from "@/components/themes/OthersStyler.vue";
import LauncherThemed from "@/components/themes/LauncherThemed.vue";

const selected = ref<typeof CustomizationTabs[number]["Key"]>("colors");
const colors = ref({
  "AlternateBase"  : "#9e7372",
  "Base"           : "#222222", // #222222
  "BrightText"     : "#e0e031",
  "Button"         : "#0000ff",
  "ButtonText"     : "#ffffff", // #ffffff
  "Highlight"      : "#96db59", // #96db59
  "HighlightedText": "#000000", // #000000
  "Link"           : "#9e98f5",
  "Text"           : "#a7a7a7", // #a7a7a7
  "ToolTipBase"    : "#521087",
  "ToolTipText"    : "#cbace3",
  "Window"         : "#313131", // #313131
  "WindowText"     : "#ffffff", // #ffffff
  "fadeAmount"     : 0.5, // not sure what this does
  "fadeColor"      : "#000000", // not sure what this does
});
</script>

<template>
  <div class="mx-auto my-12 max-w-240 flex flex-col gap-4 px-4">
    <div class="relative w-full flex flex-nowrap gap-0 overflow-x-auto rounded-md bg-catppuccin-900">
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
        <ColorGenerator v-if="selected === 'colors'" />
        <GeneralStyler v-else-if="selected === 'general'" />
        <ButtonsStyler v-else-if="selected === 'buttons'" />
        <InputsStyler v-else-if="selected === 'inputs'" />
        <OthersStyler v-else />
        <LauncherThemed
          :highlight="colors.Highlight"
          :highlightedText="colors.HighlightedText"
          :buttonText="colors.ButtonText"
          :background="colors.Window"
          :backgroundText="colors.WindowText"
          :text="colors.Text"
          :base="colors.Base"
        />
      </div>
    </div>
  </div>
</template>