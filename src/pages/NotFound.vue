<script setup lang="ts">
import Page from "@/components/layout/Page.vue";
import { useRouter, RouterLink } from "@kitbag/router";
import { LocalesArray } from "@/constants/locales.ts";
import { inject, ref } from "vue";
import { LocaleContextKey } from "@/constants/application.ts";
import type { ContextLocaleType } from "@/types/context-locale.type.ts";
import { translate } from "../lib/translations/translate.ts";

const hidden = ref<boolean>(false);
const router = useRouter();
const pathname = location.pathname;
const locale = inject<ContextLocaleType>(LocaleContextKey);

for (const locale of LocalesArray) {
  if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
    const pathnameWithoutLocale = pathname.split("/");

    pathnameWithoutLocale.shift();
    pathnameWithoutLocale.shift();

    hidden.value = true;
    router.push(`/${pathnameWithoutLocale.join("/")}`);
  }
}
</script>

<template>
  <Page v-show="!hidden">
    <div class="absolute left-[50%] top-[50%] max-w-225 w-full flex flex-col translate-x-[-50%] translate-y-[-50%] items-center justify-center gap-2 px-4 text-center text-balance text-white sm:px-6">
      <p class="select-text pb-2 text-6xl text-mauve font-black sm:pb-4 sm:text-9xl">
        {{ translate("pages.not-found.title", locale) }}
      </p>
      <p class="select-text text-xl font-bold sm:text-3xl">
        {{ translate("pages.not-found.subtitle", locale) }}
      </p>
      <p class="select-text text-sm sm:text-lg">
        {{ translate("pages.not-found.description", locale) }}
      </p>
      <RouterLink to="/" class="mt-2 rounded-md bg-mauve px-2 py-1 text-sm text-black font-bold transition-[background-color,color] sm:mt-4 hover:bg-mauve_latte sm:px-4 sm:py-3 sm:text-xl hover:text-white">
        {{ translate("pages.not-found.go-to-home", locale) }}
      </RouterLink>
    </div>
  </Page>
</template>