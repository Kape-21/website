<script setup lang="ts">
import { RouterLink, useRoute } from "@kitbag/router";
import { ExternalLinks, RoutesArray } from "@/constants/routes.ts";
import Image from "@/components/base/Image.vue";
import LocaleSelector from "@/components/general/LocaleSelector.vue";

const currentRoute = useRoute();
</script>

<template>
  <header class="sticky top-0 hidden h-20 w-full select-none justify-center border-b border-catppuccin-800 bg-catppuccin-950/50 backdrop-blur-sm sm:flex">
    <div class="mx-4 h-full max-w-320 w-full flex items-center justify-between gap-0 md:gap-4">
      <RouterLink to="/" class="shrink-0">
        <Image src="/freesm-launcher-logo.webp" alt="Freesm Launcher logo" class-names="h-12" />
      </RouterLink>
      <div class="flex flex-nowrap items-center gap-2 md:gap-4">
        <nav class="flex flex-nowrap gap-0">
          <RouterLink
            v-for="route in RoutesArray"
            :key="route.Key"
            :to="route.Path"
            :class="[
              'relative p-1 md:p-2 font-semibold before:absolute before:bottom-0 before:h-[2px] before:w-0',
              'before:bg-mauve before:transition-[width] before:duration-300 before:content-empty',
              'hover:before:!w-[calc(100%-8px)] md:hover:before:!w-[calc(100%-16px)]',
              route.Path === currentRoute?.matched?.path
                && 'before:!w-[calc(100%-8px)] md:before:!w-[calc(100%-16px)]',
            ]"
          >
            {{ route.Key }}
          </RouterLink>
        </nav>
        <div className="w-[2px] h-8 bg-mauve" />
        <a
          v-for="link in ExternalLinks"
          :key="link.Key"
          :href="link.Link"
          target="_blank"
          class="grid size-8 shrink-0 place-items-center rounded-full bg-catppuccin-800 transition-[background-color] hover:bg-catppuccin-600"
        >
          <div :class="[link.Icon, 'size-5']" />
        </a>
        <LocaleSelector />
      </div>
    </div>
  </header>
</template>