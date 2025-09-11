<script setup lang="ts">
const { src, alt, classNames } = defineProps<{
  "src"       : string;
  "alt"       : string;
  "classNames": string;
}>();
</script>

<template>
  <img :alt="alt" :src="src" :class="['shrink-0 select-none', classNames]" />
</template>