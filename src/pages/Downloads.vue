<script setup lang="ts">
import Page from "@/components/layout/Page.vue";

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
    <div class="mx-auto max-w-240 flex flex-col gap-8 px-4 pt-12">
      <p class="select-text text-center text-balance text-5xl text-white font-bold sm:text-7xl">
        <span>Download Freesm Launcher for</span>
        {{ " " }}
        <span class="animated-accent-text transition-[color] duration-2000 ease-linear">
          Windows
        </span>
      </p>
    </div>
  </Page>
</template>