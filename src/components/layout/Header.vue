<script setup lang="ts">
import { RouterLink } from "@kitbag/router";
import { ExternalLinks, Routes } from "@/constants/routes.ts";
import Image from "@/components/base/Image.vue";

const routes: Array<{ "Key": string; "Path": `/${string}` }> = Object.values(Routes);
</script>

<template>
  <header class="sticky top-0 hidden h-20 w-full select-none border-b border-catppuccin-800 bg-catppuccin-950/50 backdrop-blur-sm sm:block">
    <div class="mx-auto h-full max-w-320 w-full flex items-center justify-between">
      <RouterLink to="/">
        <Image src="/freesm-launcher-logo.webp" alt="Freesm Launcher logo" class-names="ml-4 h-12" />
      </RouterLink>
      <div class="mr-4 flex flex-nowrap items-center gap-4">
        <RouterLink
          v-for="route in routes"
          :key="route.Key"
          :to="route.Path"
          class="relative font-semibold before:absolute before:h-[2px] before:w-0 before:bg-mauve before:transition-[width] before:duration-300 before:content-empty before:-bottom-2 hover:before:w-full"
        >
          {{ route.Key }}
        </RouterLink>
        <div className="w-[2px] h-8 bg-mauve" />
        <a
          v-for="link in ExternalLinks"
          :key="link.Key"
          :href="link.Link"
          target="_blank"
          class="grid size-8 place-items-center rounded-full bg-catppuccin-800 transition-[background-color] hover:bg-catppuccin-600"
        >
          <div :class="[link.Icon, 'size-5 shrink-0']"></div>
        </a>
      </div>
    </div>
  </header>
</template>