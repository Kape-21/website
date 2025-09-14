<script setup lang="ts">
import Page from "@/components/layout/Page.vue";

document.title = "Themes - Freesm Launcher";
document
  ?.querySelector?.("meta[name=\"description\"]")
  ?.setAttribute?.(
    "content",
    "Easily create and preview your Freesm Launcher theme in real-time.",
  );
</script>

<template>
  <Page>
    <div
      v-for="(_, index) in Array.from({ length: 30 })"
      :key="index"
    >
      Themes {{ index + 1 }}
    </div>
  </Page>
</template>