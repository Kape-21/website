<script setup lang="ts">
import Layout from "@/components/layout/Layout.vue";
import { RouterView } from "@kitbag/router";
import { provide } from "vue";
import { LocaleKey, TranslateContextKey } from "@/constants/application.ts";
import { DefaultLocale, LocalesArray } from "@/constants/locales.ts";
import type { TranslateType } from "@/types/translate.type.ts";
import type { LocaleType } from "@/types/locale.type.ts";

/* Translations */
import English from "@/locales/en.json";
import Russian from "@/locales/ru.json";
import Ukrainian from "@/locales/ua.json";

const storedLocale: string = localStorage.getItem(LocaleKey) ?? DefaultLocale;
let locale: LocaleType = DefaultLocale;
let isValid: boolean = false;

for (const validLocale of LocalesArray) {
  if (validLocale === storedLocale) {
    locale = validLocale;
    isValid = true;
  }
}

if (!isValid) {
  localStorage.setItem(LocaleKey, DefaultLocale);
}

document.getElementById("__html-tag")?.setAttribute?.("lang", locale);

function translate(key: keyof typeof English): string {
  switch (locale) {
    case "en": {
      return English[key];
    }
    case "ru": {
      return Russian[key];
    }
    case "ua": {
      return Ukrainian[key];
    }
  }
}

provide<TranslateType>(TranslateContextKey, translate);
</script>

<template>
  <div v-show="false">
    <!-- This block contains UnoCSS icons that somehow are not included in the bundle -->
    <span class="i-mdi-github i-mdi-telegram" />
  </div>
  <Layout>
    <RouterView>
      <template #default="{ component }">
        <div class="relative h-[calc(100svh-80px)] w-full flex justify-center overflow-x-hidden">
          <Transition name="page">
            <component :is="component" />
          </Transition>
        </div>
      </template>
    </RouterView>
  </Layout>
</template>