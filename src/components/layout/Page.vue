<script setup lang="ts">
import { useSwipe } from "@vueuse/core";
import { computed, useTemplateRef } from "vue";

const element = useTemplateRef<EventTarget>("element");
const { isSwiping, direction, lengthX } = useSwipe(element, {
  "threshold": 50,
});
const swipedDistance = computed(() => Math.min(
  Math.abs(lengthX.value) - 50,
  256,
));
const isReallySwiping = computed(() => (
  isSwiping.value && (direction.value === "left" || direction.value === "right")
));
</script>

<template>
  <div
    ref="element"
    class="absolute h-full select-none pb-24 pt-4 transition-[opacity,transform] duration-50 ease-linear"
    :style="isReallySwiping ? {
      transform: `translateX(${swipedDistance / 2}px)`,
      opacity: `${Math.max(10 / swipedDistance - 0.2, 0)}`,
    } : {}"
  >
    <div>
      isReallySwiping: {{ isReallySwiping }}; direction: {{ direction }}; swipedDistance: {{ swipedDistance }}
    </div>
    <slot />
    <p>
      dfj dak ;lfjklj jsdfl;ks adhfjklsadhfklj sdafkljsh adjfdk
    </p>
  </div>
</template>