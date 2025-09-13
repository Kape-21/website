<script setup lang="ts">
import Layout from "@/components/layout/Layout.vue";
import { RouterView } from "@kitbag/router";
import { provide, readonly, type Ref, ref } from "vue";
import {
  LocaleKey,
  LocaleContextKey,
  LocaleSelectorContextKey,
  ScrollLockerContextKey,
} from "@/constants/application.ts";
import { DefaultLocale, LocalesArray } from "@/constants/locales.ts";
import type { LocaleType } from "@/types/locale.type.ts";
import type { LocaleSelectorType } from "@/types/locale-selector.type.ts";
import Footer from "@/components/layout/Footer.vue";
import type { ScrollLockerType } from "@/types/scroll-locker.type.ts";

const scrollLocked = ref<boolean>(false);
const footerShown = ref<boolean>(true);

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

function lockScroll(state: boolean): void {
  scrollLocked.value = state;
}

provide<Ref<LocaleType, LocaleType>>(LocaleContextKey, readonly(locale));
provide<LocaleSelectorType>(LocaleSelectorContextKey, selectLocale);
provide<ScrollLockerType>(ScrollLockerContextKey, lockScroll);

function afterEnter() {
  footerShown.value = true;
}

function beforeLeave() {
  footerShown.value = false;
}
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
            scrollLocked && 'overflow-y-hidden',
          ]"
        >
          <Transition
            @before-leave="beforeLeave"
            @after-enter="afterEnter"
            name="page"
          >
            <component :is="component" />
          </Transition>
          <Footer :shown="footerShown" />
        </div>
      </template>
    </RouterView>
  </Layout>
</template>