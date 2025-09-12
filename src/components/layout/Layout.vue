<script setup lang="ts">
import Header from "@/components/layout/Header.vue";
import ProgressBar from "@/components/base/ProgressBar.vue";
import BottomBar from "@/components/layout/BottomBar.vue";
import { useWindowSize } from "@vueuse/core";
import { computed } from "vue";

const { width } = useWindowSize();
const isDesktop = computed(() => width.value >= 640);
</script>

<template>
  <ProgressBar />
  <Header v-if="isDesktop" />
  <BottomBar v-if="isDesktop === false" />
  <slot />
</template>