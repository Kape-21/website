<script setup lang="ts">
import Header from "@/components/layout/Header.vue";
import ProgressBar from "@/components/base/ProgressBar.vue";
import BottomBar from "@/components/layout/BottomBar.vue";
</script>

<template>
  <ProgressBar />
  <Header />
  <BottomBar />
  <div class="w-full flex flex-col items-center px-4">
    <slot />
  </div>
  <!-- Bottom bar is rendered over other elements because it is 'fixed', -->
  <!-- so we manually add an element with the same height to make page content not hide under it -->
  <div class="h-20 w-full sm:hidden" />
</template>