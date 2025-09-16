<script setup lang="ts">
import { useSwipe } from "@vueuse/core";
import { ref, computed, useTemplateRef, watchEffect, inject } from "vue";
import { useRoute, useRouter } from "@kitbag/router";
import { Redirects, Routes } from "@/constants/routes.ts";
import Footer from "@/components/layout/Footer.vue";
import { PageWrapperContextKey } from "@/constants/application.ts";

const lockScroll = inject<(state: boolean) => void>(PageWrapperContextKey);

const currentRoute = useRoute();
const router = useRouter();

const element = useTemplateRef<EventTarget>("element");

const swipingThreshold = 32;
const { isSwiping, direction, lengthX } = useSwipe(element, {
  "threshold": 0,
});
const swipedDistance = computed<number>(() => Math.min(
  Math.abs(lengthX.value),
  swipingThreshold,
));
const isReallySwiping = computed<boolean>(() => (
  isSwiping.value &&
  (direction.value === "left" || direction.value === "right")
  // don't trigger swipe if user is scrolling --- Math.abs(lengthY.value) < 24
));
const shouldNavigate = computed<boolean>(
  () => isReallySwiping.value && swipedDistance.value === swipingThreshold,
);
const redirectedRecently = ref<boolean>(false);

watchEffect(() => {
  lockScroll?.(isReallySwiping.value);
});
watchEffect(() => {
  if (!shouldNavigate.value || redirectedRecently.value) {
    return;
  }

  const currentHref: string = currentRoute?.matched?.path;
  const possibleHrefs: Array<typeof Routes[keyof typeof Routes]["Path"]>
    = ["/", "/downloads", "/faq", "/themes"];
  let isOk = false;

  for (const possibleHref of possibleHrefs) {
    if (currentHref === possibleHref) {
      isOk = true;
    }
  }

  if (!isOk) {
    return;
  }

  // assure typescript that everything is ok
  const validHref = currentHref as typeof Routes[keyof typeof Routes]["Path"];

  router.push(
    Redirects[direction.value === "left" ? "left" : "right"][validHref],
  );
  redirectedRecently.value = true;

  // something like a throttling
  const timeout = setTimeout(() => {
    redirectedRecently.value = false;
  }, 100);

  return () => clearTimeout(timeout);
});
</script>

<template>
  <div
    ref="element"
    class="absolute z-5 h-fit max-w-320 w-full translate-x-0 transition-[opacity,transform] duration-50 ease-linear"
    :style="isReallySwiping ? {
    transform: `translateX(${
      direction === 'right'
        ? Math.min(swipedDistance / 2, swipingThreshold)
        : Math.max(swipedDistance * -1 / 2, -1 * swipingThreshold)
    }px)`,
    opacity: `${Math.max(10 / swipedDistance - 0.2, 0)}`,
  } : {}"
  >
    <div class="relative z-5 bg-catppuccin-950 p-4">
      <slot />
    </div>
    <Footer />
  </div>
</template>