<script setup lang="ts">
import Image from "@/components/base/Image.vue";

const { opacity } = defineProps<{
  "opacity": number;
}>();
</script>

<template>
  <div
    :class="[
      'fixed flex justify-center bottom-20 left-0 right-0 z-0 h-83',
      'p-8 transition-[opacity] sm:bottom-0 sm:h-38',
      /* one way transition with duration overrides */
      opacity === 1 ? 'duration-150' : 'duration-50',
    ]"
    :style="{ opacity: opacity }"
  >
    <div class="max-w-320 w-full flex flex-col flex-nowrap gap-4 sm:flex-row sm:justify-between">
      <div class="flex flex-col items-center gap-2 sm:items-start">
        <RouterLink to="/">
          <Image
            class-names="h-10"
            src="/freesm-launcher-logo.webp"
            alt="Freesm Launcher logo"
          />
        </RouterLink>
        <p class="text-gray-400 max-sm:text-sm">
          Short Description
        </p>
      </div>
      <div class="flex flex-col gap-4 sm:flex-row">
        <div
          v-for="item in []"
          :key="item"
          class="flex flex-1 flex-col items-center gap-2 px-4 sm:items-start"
        >
          <p class="text-white font-semibold max-sm:text-sm">
            item.title
          </p>
          <div class="flex flex-row items-center gap-2 sm:flex-col sm:items-start">
            <a
              v-for="item in []"
              :key="item"
              href=""
              target="_blank"
              class="text-center sm:text-start leading-5 text-wrap text-gray-400 max-sm:text-sm underline-offset-[5px] hover:underline"
            >
              item.name
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>