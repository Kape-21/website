<script setup lang="ts">
const { active } = defineProps<{
  "active": boolean;
}>();
</script>

<style scoped>
.info-icon {
  will-change: d;
  transition-property: d;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(.25,.75,.25,.75);
}

.active .info-icon {
  d: path("M 440 -280 h 80 v -240 h -80 v 240 Z m 40 -320 q 17 0 28.5 -11.5 T 520 -640 q 0 -17 -11.5 -28.5 T 480 -680 q -17 0 -28.5 11.5 T 440 -640 q 0 17 11.5 28.5 T 480 -600 Z m 0 520 q -83 0 -156 -31.5 T 197 -197 q -54 -54 -85.5 -127 T 80 -480 q 0 -83 31.5 -156 T 197 -763 q 54 -54 127 -85.5 T 480 -880 q 83 0 156 31.5 T 763 -763 q 54 54 85.5 127 T 880 -480 q 0 83 -31.5 156 T 763 -197 q -54 54 -127 85.5 T 480 -80 Z m 0 -80 q 0 -320 0 -320 t 0 0 q 0 0 0 0 t 0 0 q 0 0 0 0 t 0 0 q 0 0 0 0 t 0 0 Z m 0 -320 Z");
}
</style>

<template>
  <svg
    :class="[
    'shrink-0 py-1 transition-[fill] duration-200',
    active && 'active',
  ]"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
  >
    <path
      class="info-icon"
      d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
    />
  </svg>
</template>