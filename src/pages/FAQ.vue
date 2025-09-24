<!-- eslint-disable unicorn/filename-case -->
<script setup lang="ts">
import Page from "@/components/layout/Page.vue";
import { translate } from "@/lib/translations/translate.ts";
import { inject } from "vue";
import type { ContextLocaleType } from "@/types/context-locale.type.ts";
import { LocaleContextKey } from "@/constants/application.ts";

const locale = inject<ContextLocaleType>(LocaleContextKey);

document.title = "FAQ - Freesm Launcher";
document
  ?.querySelector?.("meta[name=\"description\"]")
  ?.setAttribute?.(
    "content",
    "A collection of helpful information for frequent problems when using Freesm Launcher.",
  );
</script>

<template>
  <Page>
    <div class="mx-auto max-w-240 flex flex-col gap-8 px-4 pt-12">
      <p class="select-text text-center text-balance text-5xl text-white font-bold sm:text-7xl">
        {{ translate("pages.faq.title", locale) }}
      </p>
    </div>
  </Page>
</template>