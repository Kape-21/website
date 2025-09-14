<script setup lang="ts">
import Page from "@/components/layout/Page.vue";
import Image from "@/components/base/Image.vue";

document.title = "Downloads - Freesm Launcher";
document
  ?.querySelector?.("meta[name=\"description\"]")
  ?.setAttribute?.(
    "content",
    "Download Freesm Launcher for your platform for free, no ads, no viruses, no SMS" +
    ", no registration, no calls, no glowies. Or don't do it, it's up to you!",
  );
</script>

<template>
  <Page>
    <div class="pointer-events-none grid cols-2 gap-4">
      <Image src="/photo_2025-09-04_20-16-02.jpg" alt="temp" />
      <Image src="/photo_2025-08-29_18-35-38.jpg" alt="temp" />
      <Image src="/bocchi-tired.jpg" alt="temp" />
      <Image src="/ame-chan.jpg" alt="temp" />
    </div>
  </Page>
</template>