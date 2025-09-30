<script setup lang="ts">
import Image from "@/components/base/Image.vue";

const {
  highlight,
  highlightText,
  background,
  buttonColor,
  base,
} = defineProps<{
  "highlight"    : string;
  "highlightText": string;
  "background"   : string;
  "buttonColor"  : string;
  "base"         : string;
}>();

const buttons = [
  { "name": "Launcher", "icon": "special" },
  { "name": "Minecraft", "icon": "i-lucide-box" },
  { "name": "Java", "icon": "i-lucide-coffee" },
  { "name": "Language", "icon": "i-lucide-languages" },
  { "name": "Custom Commands", "icon": "i-lucide-square-terminal" },
  { "name": "Environment Variables", "icon": "i-lucide-code" },
  { "name": "Proxy", "icon": "i-lucide-earth-lock" },
  { "name": "External Tools", "icon": "i-lucide-wrench" },
  { "name": "Accounts", "icon": "i-lucide-users" },
  { "name": "APIs", "icon": "i-lucide-folder" },
];
</script>

<template>
  <div class="h-full w-full flex flex-nowrap border border-[#7a7a7a]">
    <div
      class="h-full flex shrink-0 flex-col"
      :style="{ background: base }"
    >
      <div
        v-for="button in buttons"
        :key="button.name"
        class="flex flex-nowrap items-center gap-2 p-1"
        :style="{
          background: button.icon === 'special' ? highlight : 'transparent',
          color     : button.icon === 'special' ? highlightText : '#ffffff',
        }"
      >
        <Image
          class-names="size-6"
          v-if="button.icon === 'special'"
          src="/favicon.webp"
          alt="Freesm Launcher logo"
        />
        <div v-else :class="[button.icon, 'size-6']" />
        <p class="text-sm">
          {{ button.name }}
        </p>
      </div>
    </div>
    <div
      class="h-full w-full flex flex-col gap-2 p-2"
      :style="{ background: background }"
    >
      <div class="flex flex-nowrap items-center justify-between">
        <p class="pl-2 font-bold leading-none">
          Launcher
        </p>
        <Image class-names="size-6" src="/favicon.webp" alt="Freesm Launcher logo" />
      </div>
      <div class="h-full w-full flex flex-col">
        <div class="flex flex-nowrap items-end">
          <div
            v-for="name in ['Features', 'User Interface', 'Console']"
            :key="name"
            :class="[
              'mix-blend-lighten text-sm p-2 leading-none rounded-t-sm',
              name === 'User Interface'
                ? 'border-t-2 border-x-2'
                : '',
            ]"
            :style="{ background: buttonColor }"
          >
            {{ name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>