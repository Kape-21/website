<script setup lang="ts">
import { useSwipe } from "@vueuse/core";
import { ref, computed, useTemplateRef, watchEffect, inject } from "vue";
import { useRoute, useRouter } from "@kitbag/router";
import { Redirects, Routes } from "@/constants/routes.ts";
import { SetFooterVisibilityContextKey } from "@/constants/application.ts";
import type { SetFooterVisibilityType } from "@/types/set-footer-visibility.type.ts";

const currentRoute = useRoute();
const router = useRouter();

const element = useTemplateRef<EventTarget>("element");

const swipingThreshold = 32;
const { isSwiping, direction, lengthX } = useSwipe(element, {
  "threshold": swipingThreshold,
});
const swipedDistance = computed<number>(() => Math.min(
  Math.abs(lengthX.value) - swipingThreshold,
  swipingThreshold,
));
const isReallySwiping = computed<boolean>(() => (
  isSwiping.value && (direction.value === "left" || direction.value === "right")
));
const shouldNavigate = computed<boolean>(
  () => isReallySwiping.value && swipedDistance.value === swipingThreshold,
);
const redirectedRecently = ref<boolean>(false);

const setFooterVisibility = inject<SetFooterVisibilityType>(SetFooterVisibilityContextKey);

const footerActionTimeout = ref<number>();

watchEffect(() => {
  if (isReallySwiping.value && swipedDistance.value) {
    clearTimeout(footerActionTimeout.value);
    setFooterVisibility?.(
      (32 - swipedDistance.value) / 32,
    );
    console.log((32 - swipedDistance.value) / 32);

    footerActionTimeout.value = setTimeout(() => {
      setFooterVisibility?.(1);
    }, 750);

    return () => clearTimeout(footerActionTimeout.value);
  }
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
    class="absolute z-5 h-fit max-w-320 w-full transition-[opacity,transform] duration-50 ease-linear"
    :style="isReallySwiping ? {
    transform: `translateX(${
      direction === 'right'
        ? Math.min(swipedDistance / 2, swipingThreshold)
        : Math.max(swipedDistance * -1 / 2, -1 * swipingThreshold)
    }px)`,
    opacity: `${Math.max(10 / swipedDistance - 0.2, 0)}`,
  } : {}"
  >
    <div class="bg-catppuccin-950 p-4">
      <slot />
    </div>
    <div class="h-83 w-full -z-50 sm:h-38" />
  </div>
</template>