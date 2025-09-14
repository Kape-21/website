<script setup lang="ts">
import Page from "@/components/layout/Page.vue";
import Image from "@/components/base/Image.vue";
import Hero from "@/components/general/Hero.vue";
</script>

<template>
  <Page>
    <Hero></Hero>
    <div class="pointer-events-none grid cols-2 gap-4">
      <Image src="/ame-chan.jpg" alt="temp" />
      <Image src="/bocchi-tired.jpg" alt="temp" />
      <Image src="/photo_2025-08-29_18-35-38.jpg" alt="temp" />
      <Image src="/photo_2025-09-03_00-46-19.jpg" alt="temp" />
    </div>
  </Page>
</template>