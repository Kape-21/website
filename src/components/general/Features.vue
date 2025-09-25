<script setup lang="ts">
import { FeaturesSection, LocaleContextKey } from "@/constants/application.js";
import { translate } from "@/lib/translations/translate.ts";
import { inject } from "vue";
import type { ContextLocaleType } from "@/types/context-locale.type.ts";
import AuthFeature from "@/components/general/features/AuthFeature.vue";
import CustomizationFeature from "@/components/general/features/CustomizationFeature.vue";
import OtherFeature from "@/components/general/features/OtherFeature.vue";
import PrismFeatures from "@/components/general/features/PrismFeatures.vue";

const locale = inject<ContextLocaleType>(LocaleContextKey);
</script>

<template>
  <div class="mx-auto mt-12 max-w-240 flex flex-col flex-wrap items-start justify-between gap-12 px-4 lg:flex-row lg:gap-8">
    <div
      v-for="feature in FeaturesSection"
      :key="feature.Id"
      :class="[
        'w-full flex flex-col-reverse items-center gap-4 lg:gap-8 lg:items-start',
        feature.Reverse ? 'lg:flex-row-reverse' : 'lg:flex-row',
      ]"
    >
      <AuthFeature v-if="feature.Id === 'auth'" />
      <CustomizationFeature v-else-if="feature.Id === 'customization'" />
      <PrismFeatures v-else-if="feature.Id === 'prism'" />
      <OtherFeature v-else />
      <div class="flex flex-1 flex-col gap-2">
        <p class="select-text text-justify text-xl text-white font-semibold sm:text-2xl">
          {{ translate(feature.Title, locale) }}
        </p>
        <p class="text-right-to-left select-text text-justify text-gray-300 sm:text-lg">
          {{ translate(feature.Description, locale) }}
        </p>
      </div>
    </div>
  </div>
</template>