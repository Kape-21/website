<script setup lang="ts">
import type { LauncherInstanceType } from "@/types/launcher-instance.type.ts";
import { shallowRef, useTemplateRef } from "vue";
import { onClickOutside, useEventListener } from "@vueuse/core";

const { instance, selectInstance } = defineProps<{
  "instance"      : LauncherInstanceType;
  "selectInstance": () => void;
}>();
const contextTarget = useTemplateRef<HTMLElement>("contextTarget");

const contextMenu = shallowRef<{
  "opened": boolean;
  "x"     : number;
  "y"     : number;
}>({
  "opened": false,
  "x"     : 0,
  "y"     : 0,
});

const closeContextMenu = () => {
  contextMenu.value = {
    ...contextMenu.value,
    "opened": false,
  };
};

onClickOutside(contextTarget, closeContextMenu);
useEventListener("contextmenu", (event: MouseEvent) => {
  if (
    event.target === null ||
    !("id" in event.target)
  ) {
    closeContextMenu();

    return;
  }

  if (event.target.id === `__context-menu-${instance.Id}`) {
    return;
  }

  if (event.target.id !== `__instance-selector-${instance.Id}`) {
    closeContextMenu();

    return;
  }

  selectInstance();

  contextMenu.value = {
    "x"     : event.offsetX,
    "y"     : event.offsetY,
    "opened": true,
  };
});
</script>

<template>
  <div
    ref="contextTarget"
    :id="`__context-menu-${instance.Id}`"
    :class="[
        'absolute z-1000 flex flex-col cursor-default gap-1',
        'border border-[#181822] bg-catppuccin-900 p-1 transition-[opacity]',
        contextMenu.opened
          ? 'visible opacity-100'
          : 'invisible opacity-0',
      ]"
    :style="{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }"
  >
    <p class="pointer-events-none p-1 text-center text-nowrap text-[10px] text-[#9da3bd] sm:text-[13px]">
      {{ instance.Name }}
    </p>
    asdf
  </div>
</template>