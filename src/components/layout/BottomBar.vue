<script setup lang="ts">
import { RouterLink, useRoute } from "@kitbag/router";
import { RoutesArray } from "@/constants/routes.ts";
import Compass from "@/components/icons/Compass.vue";

const currentRoute = useRoute();
</script>

<template>
  <div class="fixed bottom-0 z-1000 h-20 w-full flex flex-nowrap overflow-x-auto bg-catppuccin-900 sm:hidden">
    <RouterLink
      v-for="route in RoutesArray"
      :key="route.Key"
      :to="route.Path"
      :class="[
        'group h-full min-w-20 shrink-0 flex flex-col gap-2 justify-center items-center flex-1',
        currentRoute.href === route.Path
          ? 'text-white fill-white'
          : 'text-[theme(colors.white/.7)] fill-[theme(colors.white/.7)]',
      ]"
    >
      <div
        :class="[
          'relative flex justify-center h-8 rounded-full duration-200 transition-[width,background-color]',
          'group-hover:before:bg-[theme(colors.white/.02)] group-active:before:bg-[theme(colors.white/.02)]',
          'before:w-18 before:h-full before:rounded-full before:absolute before:content-empty',
          currentRoute.href === route.Path
            ? 'w-18 bg-catppuccin-600'
            : 'w-8',
        ]"
      >
        <Compass :active="currentRoute.href === route.Path" />
      </div>
      <p class="select-none text-center text-sm leading-none transition-[color] duration-200">
        {{ route.Key }}
      </p>
    </RouterLink>
  </div>
</template>