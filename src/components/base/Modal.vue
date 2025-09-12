<script setup lang="ts">
const { shown, toggle } = defineProps<{
  "shown" : boolean;
  "toggle": () => void;
}>();
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        @click="toggle"
        v-show="shown"
        class="fixed bottom-0 left-0 right-0 top-0 z-500 bg-[theme(colors.black/.7)]"
      />
    </Transition>
    <Transition name="slide-fade">
      <div
        v-show="shown"
        class="fixed bottom-26 left-6 right-6 top-6 z-600 border border-catppuccin-600 rounded-md bg-catppuccin-900"
      >
        <slot />
      </div>
    </Transition>
  </Teleport>
</template>