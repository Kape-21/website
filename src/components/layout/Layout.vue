<script setup lang="ts">
import Header from "@/components/layout/Header.vue";
import ProgressBar from "@/components/base/ProgressBar.vue";
</script>

<template>
  <ProgressBar />
  <Header />
  <slot />
</template>