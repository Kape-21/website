<script setup lang="ts">
import Page from "@/components/layout/Page.vue";
import Hero from "@/components/general/Hero.vue";
import Features from "@/components/general/Features.vue";
import Team from "@/components/general/Team.vue";

document.title = "Freesm Launcher";
document
  ?.querySelector?.("meta[name=\"description\"]")
  ?.setAttribute?.(
    "content",
    "A Prism Launcher fork aimed to provide a free way to play Minecraft.",
  );
</script>

<template>
  <Page>
    <Hero />
    <Features />
    <Team />
  </Page>
</template>