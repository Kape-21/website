<script setup lang="ts">
import Page from "@/components/layout/Page.vue";
</script>

<template>
  <Page>
    <div
      v-for="(_, index) in Array.from({ length: 30 })"
      :key="index"
    >
      Home {{ index }}
    </div>
  </Page>
</template>