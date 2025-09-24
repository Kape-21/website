<script setup lang="ts">
const { language, label } = defineProps<{
  "language": "css" | "json";
  "label"   : string;
}>();
</script>

<template>
  <slot />
</template>