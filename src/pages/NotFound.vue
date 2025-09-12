<script setup lang="ts">
import Page from "@/components/layout/Page.vue";
import { useRouter } from "@kitbag/router";
import { LocalesArray } from "@/constants/locales.ts";
import { ref } from "vue";

const hidden = ref<boolean>(false);
const router = useRouter();
const pathname = location.pathname;

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
    Page was not found...
  </Page>
</template>