<!-- eslint-disable unicorn/filename-case -->
<script setup lang="ts">
import Page from "@/components/layout/Page.vue";
import Image from "@/components/base/Image.vue";

document.title = "FAQ - Freesm Launcher";
document
  ?.querySelector?.("meta[name=\"description\"]")
  ?.setAttribute?.(
    "content",
    "A collection of helpful information for frequent problems when using Freesm Launcher.",
  );
</script>

<template>
  <Page>
    <div class="pointer-events-none grid cols-2 gap-4">
      <Image src="/photo_2025-08-29_18-35-38.jpg" alt="temp" />
      <Image src="/photo_2025-09-03_00-46-19.jpg" alt="temp" />
      <Image src="/assets/ame-chan.webp" alt="temp" />
      <Image src="/bocchi-tired.jpg" alt="temp" />
    </div>
  </Page>
</template>