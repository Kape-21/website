<script setup lang="ts">
import Header from "@/components/layout/Header.vue";
import ProgressBar from "@/components/base/ProgressBar.vue";
import BottomBar from "@/components/layout/BottomBar.vue";
</script>

<template>
  <ProgressBar />
  <Header />
  <BottomBar />
  <div class="h-[calc(100vh-80px)] w-full flex flex-col items-center px-4">
    <slot />
  </div>
</template>