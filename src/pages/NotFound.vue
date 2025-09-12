<script setup lang="ts">
import Page from "@/components/layout/Page.vue";
import { useRouter, RouterLink } from "@kitbag/router";
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
    <div class="absolute left-[50%] top-[50%] max-w-225 w-full flex flex-col translate-x-[-50%] translate-y-[-50%] items-center justify-center gap-2 px-4 text-center text-balance text-white sm:px-6">
      <p class="select-text pb-2 text-6xl text-mauve font-black sm:pb-4 sm:text-9xl">
        Oops!
      </p>
      <p class="select-text text-xl font-bold sm:text-3xl">
        Page not found
      </p>
      <p class="select-text text-sm sm:text-lg">
        The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
      </p>
      <RouterLink to="/" class="mt-2 rounded-md bg-mauve px-2 py-1 text-sm text-black font-bold transition-[background-color,color] sm:mt-4 hover:bg-mauve_latte sm:px-4 sm:py-3 sm:text-xl hover:text-white">
        Go to Home
      </RouterLink>
    </div>
  </Page>
</template>