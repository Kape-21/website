<script setup lang="ts">
import { FeaturesSection, LocaleContextKey } from "@/constants/application.js";
import { translate } from "@/lib/translations/translate.ts";
import { inject } from "vue";
import type { ContextLocaleType } from "@/types/context-locale.type.ts";

const locale = inject<ContextLocaleType>(LocaleContextKey);
</script>

<template>
  <div class="mx-auto mt-12 max-w-240 flex flex-col flex-wrap select-text items-start justify-between gap-8 px-8 lg:flex-row">
    <div
      v-for="feature in FeaturesSection"
      :key="feature.Title"
      class="flex shrink-0 flex-col gap-2 lg:max-w-108"
    >
      <div class="flex flex-nowrap items-center gap-2 text-white">
        <div
          :class="[
            'min-h-6 min-w-6 sm:min-h-8 sm:min-w-8',
            feature.Icon,
          ]"
        />
        <p class="text-justify text-xl text-white font-semibold sm:text-3xl">
          {{ translate(feature.Title, locale) }}
        </p>
      </div>
      <p class="text-justify text-gray-300 sm:text-xl">
        {{ translate(feature.Description, locale) }}
      </p>
    </div>
  </div>
</template>