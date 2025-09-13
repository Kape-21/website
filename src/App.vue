<script setup lang="ts">
import Layout from "@/components/layout/Layout.vue";
import { RouterView } from "@kitbag/router";
import { provide, readonly, type Ref, ref } from "vue";
import {
  LocaleKey,
  LocaleContextKey,
  LocaleSelectorContextKey,
  SetFooterVisibilityContextKey,
} from "@/constants/application.ts";
import { DefaultLocale, LocalesArray } from "@/constants/locales.ts";
import type { LocaleType } from "@/types/locale.type.ts";
import type { LocaleSelectorType } from "@/types/locale-selector.type.ts";
import Footer from "@/components/layout/Footer.vue";
import type { SetFooterVisibilityType } from "@/types/set-footer-visibility.type.ts";

const footerOpacity = ref<number>(1);

const storedLocale: string = localStorage.getItem(LocaleKey) ?? DefaultLocale;
const locale = ref<LocaleType>(DefaultLocale);
let isValid: boolean = false;

for (const validLocale of LocalesArray) {
  if (validLocale === storedLocale) {
    locale.value = validLocale;
    isValid = true;
  }
}

if (!isValid) {
  localStorage.setItem(LocaleKey, DefaultLocale);
}

document.getElementById("__html-tag")?.setAttribute?.("lang", locale.value);

function selectLocale(selected: LocaleType): void {
  locale.value = selected;
  localStorage.setItem(LocaleKey, selected);
}

function afterEnter() {
  footerOpacity.value = 1;
}

function beforeLeave() {
  footerOpacity.value = 0;
}

function setFooterVisibility(opacity: number): void {
  footerOpacity.value = opacity;
}

provide<Ref<LocaleType, LocaleType>>(LocaleContextKey, readonly(locale));
provide<LocaleSelectorType>(LocaleSelectorContextKey, selectLocale);
provide<SetFooterVisibilityType>(SetFooterVisibilityContextKey, setFooterVisibility);
</script>

<template>
  <div v-show="false">
    <!-- This block contains UnoCSS icons that somehow are not included in the bundle -->
    <span class="i-mdi-github i-mdi-telegram" />
  </div>
  <Layout>
    <RouterView>
      <template #default="{ component }">
        <div
          :class="[
            'relative min-h-[calc(100svh-80px)] w-full flex',
            'justify-center overflow-x-hidden bg-catppuccin-900',
          ]"
        >
          <Transition
            @before-leave="beforeLeave"
            @after-enter="afterEnter"
            name="page"
          >
            <component :is="component" />
          </Transition>
          <Footer :opacity="footerOpacity" />
        </div>
      </template>
    </RouterView>
  </Layout>
</template>