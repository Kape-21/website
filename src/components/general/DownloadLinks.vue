<script setup lang="ts">
import { DownloadLinks } from "@/constants/routes.ts";
import { UAParser } from "ua-parser-js";
import { getPlatformName } from "@/lib/helpers/get-platform-name.ts";
import { computed } from "vue";

const { os } = UAParser(navigator.userAgent);
const platform = getPlatformName(os?.name);

const sortedDownloadLinks = computed(() => {
  return DownloadLinks
    // make user's platform a first element in the array
    .sort((_, current) => (current.Title === platform ? 1 : 0));
});
</script>

<template>
  <div class="mx-auto mt-12 max-w-240 flex flex-col gap-4 px-4">
    <template v-for="downloads in sortedDownloadLinks" :key="downloads.Title">
      <p class="select-text text-xl text-white font-semibold sm:text-3xl">
        {{ downloads.Title }}
      </p>
      <div class="grid cols-1 gap-4 lg:cols-3 sm:cols-2">
        <a
          v-for="link in downloads.Links"
          :key="link.Link"
          :href="link.Link"
          target="_blank"
          class="flex flex-nowrap items-center gap-4 rounded-md bg-catppuccin-900 p-4 transition-[background-color] hover:bg-catppuccin-800"
        >
          <div class="grid size-16 place-items-center rounded-md bg-catppuccin-800">
            <div :class="['size-8', link.Icon]" />
          </div>
          <div class="flex flex-col gap-2">
            <p class="select-text text-sm text-gray-300 leading-none">
              {{ link.Extra }}
            </p>
            <p class="select-text text-xl font-semibold leading-none">
              {{ link.Name }}
            </p>
          </div>
        </a>
      </div>
    </template>
  </div>
</template>