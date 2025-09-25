<script setup lang="ts">
import Layout from "@/components/layout/Layout.vue";
import { RouterView } from "@kitbag/router";
import { provide, readonly, type Ref, ref, watchEffect } from "vue";
import {
  LocaleKey,
  LocaleContextKey,
  LocaleSelectorContextKey,
  PageWrapperContextKey,
} from "@/constants/application.ts";
import { DefaultLocale, Locales, LocalesArray } from "@/constants/locales.ts";
import type { LocaleType } from "@/types/locale.type.ts";
import type { LocaleSelectorType } from "@/types/locale-selector.type.ts";
import { useIntervalFn } from "@vueuse/core";
import { useAccentAnimation } from "@/lib/stores/misc/accent-animations.ts";

const storedLocale: string = localStorage.getItem(LocaleKey) ?? navigator.language.slice(0, 2);
const locale = ref<LocaleType>(DefaultLocale);
const scrollLocked = ref<boolean>(false);
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

provide<(state: boolean) => void>(PageWrapperContextKey, lockScroll);
provide<Ref<LocaleType, LocaleType>>(LocaleContextKey, readonly(locale));
provide<LocaleSelectorType>(LocaleSelectorContextKey, selectLocale);

const accentAnimationStore = useAccentAnimation();

const colors: Record<string, string> = {
  "#cba6f7": "#89b4fa",
  "#89b4fa": "#89dceb",
  "#89dceb": "#f5c2e7",
  "#f5c2e7": "#b4befe",
  "#b4befe": "#cba6f7",
};

const { pause, resume } = useIntervalFn(() => {
  const root = document.documentElement;
  const currentColor: string = getComputedStyle(root).getPropertyValue("--animated-accent");

  root.style.setProperty("--animated-accent", colors[currentColor]);
}, 2050);

watchEffect(() => {
  if (accentAnimationStore.enabled) {
    resume();

    return;
  }

  pause();
});
watchEffect(() => {
  const shouldBeRTL: boolean = Locales
    .find(({ Code }) => Code === locale.value)?.RTL ?? false;

  if (shouldBeRTL) {
    document.body.dataset.rtl = "yes";

    return;
  }

  delete document.body.dataset.rtl;
});
</script>

<template>
  <div v-show="false">
    <!-- This block contains UnoCSS classes that are not included in the bundle -->
    <span class="i-mdi-github i-mdi-telegram i-fluent-add-square-24-regular i-fluent-folder-24-regular i-fluent-settings-24-regular i-fluent-chat-help-24-regular i-fluent-phone-update-24-regular i-fluent-animal-cat-24-regular i-fluent-people-16-regular i-fluent-edit-16-regular i-fluent-triangle-right-16-regular i-fluent-dismiss-circle-16-regular i-fluent-settings-16-regular i-fluent-tag-16-regular i-fluent-folder-16-regular i-fluent-folder-arrow-right-16-regular i-fluent-copy-arrow-right-16-regular i-fluent-delete-16-regular i-fluent-link-16-regular i-simple-icons-nixos i-simple-icons-archlinux i-simple-icons-debian i-simple-icons-flatpak i-simple-icons-linux i-simple-icons-gentoo i-mdi-microsoft-windows i-simple-icons-arm i-simple-icons-apple text-red-500 underline" />
  </div>
  <Layout>
    <RouterView>
      <template #default="{ component }">
        <div
          :class="[
            'relative min-h-[calc(100svh-80px)] w-full flex justify-center overflow-x-hidden',
            'scroll-gutter-stable-both xle:pt-20 xle:min-h-svh',
            scrollLocked && 'overflow-y-hidden',
          ]"
        >
          <Transition name="page">
            <component :is="component" />
          </Transition>
        </div>
      </template>
    </RouterView>
  </Layout>
</template>