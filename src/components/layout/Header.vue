<script setup lang="ts">
import { RouterLink } from "@kitbag/router";
import Image from "@/components/base/Image.vue";
</script>

<template>
  <header class="sticky top-0 hidden h-20 w-full select-none border-b border-catppuccin-800 bg-catppuccin-950/50 backdrop-blur-sm sm:block">
    <div class="mx-auto h-full max-w-320 w-full flex items-center justify-between">
      <Image src="/freesm-launcher-logo.webp" alt="Freesm Launcher logo" class-names="ml-4 h-12" />
      <div class="mr-4 flex flex-nowrap items-center gap-4">
        <div className="w-[2px] bg-mauve" />
        <RouterLink to="/" class="grid size-8 place-items-center rounded-full bg-catppuccin-800 hover:bg-catppuccin-600">
          <div class=""></div>
        </RouterLink>
      </div>
    </div>
  </header>
</template>