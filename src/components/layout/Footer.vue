<script setup lang="ts">
const { shown } = defineProps<{
  "shown": boolean;
}>();
</script>

<template>
  <div :class="[
      'fixed bottom-20 left-0 right-0 z-0 h-83 p-8 transition-[opacity] sm:bottom-0 sm:h-38',
      /* one way transition with duration overrides */
      shown ? 'opacity-100 duration-150' : 'opacity-0 duration-0',
    ]">
    <a href="/">sdf</a>
    <p>huh</p>
  </div>
</template>