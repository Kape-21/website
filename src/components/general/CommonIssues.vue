<script setup lang="ts">
import { FreesmIssues, LocaleContextKey } from "@/constants/application.ts";
import { inject } from "vue";
import type { ContextLocaleType } from "@/types/context-locale.type.ts";
import { translate } from "@/lib/translations/translate.ts";
import Image from "@/components/base/Image.vue";

const locale = inject<ContextLocaleType>(LocaleContextKey);
</script>

<template>
  <div class="mx-auto my-12 max-w-240 flex flex-col gap-4 px-4">
    <template v-for="issue in FreesmIssues" :key="issue.Name">
      <p class="select-text text-xl text-white font-semibold sm:text-3xl">
        {{ translate(issue.Name, locale) }}
      </p>
      <div
        v-if="issue.Images.length > 0"
        class="flex flex-wrap gap-4 sm:flex-nowrap"
      >
        <Image
          v-for="image in issue.Images"
          :key="image.Text"
          :src="image.Link"
          :alt="image.Text"
        />
      </div>
      <p class="select-text text-justify text-lg text-gray-300 sm:text-xl">
        {{ translate(issue.Description, locale) }}
      </p>
    </template>
  </div>
</template>