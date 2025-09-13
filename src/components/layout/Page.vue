<script setup lang="ts">
import { useSwipe } from "@vueuse/core";
import { ref, computed, useTemplateRef, watchEffect } from "vue";
import { useRoute, useRouter } from "@kitbag/router";
import { Redirects, Routes } from "@/constants/routes.ts";

const currentRoute = useRoute();
const router = useRouter();
const element = useTemplateRef<EventTarget>("element");
const { isSwiping, direction, lengthX } = useSwipe(element, {
  "threshold": 48,
});
const swipedDistance = computed<number>(() => Math.min(
  Math.abs(lengthX.value) - 48,
  48,
));
const isReallySwiping = computed<boolean>(() => (
  isSwiping.value && (direction.value === "left" || direction.value === "right")
));
const shouldNavigate = computed<boolean>(() => isReallySwiping.value && swipedDistance.value === 48);
const redirectedRecently = ref<boolean>(false);

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
        ? Math.min(swipedDistance / 2, 48)
        : Math.max(swipedDistance * -1 / 2, -48)
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