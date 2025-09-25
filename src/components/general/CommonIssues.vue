<script setup lang="ts">
import { FreesmIssues, LocaleContextKey } from "@/constants/application.ts";
import { inject, ref } from "vue";
import type { ContextLocaleType } from "@/types/context-locale.type.ts";
import { translate } from "@/lib/translations/translate.ts";
import Image from "@/components/base/Image.vue";

const locale = inject<ContextLocaleType>(LocaleContextKey);

const maximized = ref<{
  "Link": string;
  "Text": string;
} | undefined>(undefined);
</script>

<template>
  <div class="mx-auto my-12 max-w-240 flex flex-col gap-4 px-4">
    <template v-for="issue in FreesmIssues" :key="issue.Name">
      <p class="select-text text-xl text-white font-semibold sm:text-3xl">
        {{ translate(issue.Name, locale) }}
      </p>
      <div
        v-if="issue.Images.length > 0"
        class="grid cols-1 gap-4 sm:cols-2"
      >
        <Image
          @click="maximized = image"
          v-for="image in issue.Images"
          :key="image.Text"
          :src="image.Link"
          :alt="image.Text"
          class-names="h-full object-cover rounded-md cursor-pointer !transition-[opacity,filter] hover:brightness-70"
        />
      </div>
      <p class="select-text text-justify text-lg text-gray-300 sm:text-xl">
        {{ translate(issue.Description, locale) }}
      </p>
    </template>
    <Teleport to="body">
      <div
        @click="maximized = undefined"
        v-if="maximized !== undefined"
        class="fixed bottom-0 left-0 right-0 top-0 z-60000 p-4 bg-[theme(colors.black/.7)]"
      >
        <Image
          class-names="mx-auto rounded-md h-full max-w-full"
          :src="maximized?.Link"
          :alt="maximized?.Text"
        />
      </div>
    </Teleport>
  </div>
</template>