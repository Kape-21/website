<script setup lang="ts">
const { opacity } = defineProps<{
  "opacity": number;
}>();
</script>

<template>
  <div
    :class="[
      'fixed bottom-20 left-0 right-0 z-0 h-83 p-8 transition-[opacity] sm:bottom-0 sm:h-38',
      /* one way transition with duration overrides */
      opacity === 1 ? 'duration-150' : 'duration-50',
    ]"
    :style="{ opacity: opacity }"
  >
    <a href="/">sdf</a>
    <p>huh</p>
  </div>
</template>