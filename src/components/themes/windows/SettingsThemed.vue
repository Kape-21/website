<script setup lang="ts">
const { base } = defineProps<{
  "base": string;
}>();

const buttons = [
  { "name": "Launcher", "icon": "" },
  { "name": "Minecraft", "icon": "" },
  { "name": "Java", "icon": "" },
  { "name": "Language", "icon": "" },
  { "name": "Custom Commands", "icon": "" },
  { "name": "Environment Variables", "icon": "" },
  { "name": "Proxy", "icon": "" },
  { "name": "External Tools", "icon": "" },
  { "name": "Accounts", "icon": "" },
  { "name": "APIs", "icon": "" },
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
      >
        {{ button.name }}
      </div>
    </div>
    <div class="h-full w-full flex flex-col"></div>
  </div>
</template>