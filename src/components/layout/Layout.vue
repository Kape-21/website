<script setup lang="ts">
import Header from "@/components/layout/Header.vue";
import ProgressBar from "@/components/base/ProgressBar.vue";
import BottomBar from "@/components/layout/BottomBar.vue";
</script>

<template>
  <ProgressBar />
  <Header />
  <BottomBar />
  <div class="w-full flex justify-center">
    <slot />
  </div>
</template>