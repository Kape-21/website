<script setup lang="ts">
import type { LauncherInstanceType } from "@/types/launcher-instance.type.ts";
import { computed, inject, shallowRef, useTemplateRef } from "vue";
import { onClickOutside, useEventListener } from "@vueuse/core";
import { LauncherInstanceContextMenuItems } from "@/constants/launcher.ts";
import Image from "@/components/base/Image.vue";
import type { ContextLocaleType } from "@/types/context-locale.type.ts";
import { LocaleContextKey } from "@/constants/application.ts";
import { translate } from "@/lib/translations/translate.ts";

const locale = inject<ContextLocaleType>(LocaleContextKey);

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

const actionStates: Record<
  typeof LauncherInstanceContextMenuItems[number]["Name"],
  () => void
> = {
  "launcher.launch"         : () => {},
  "launcher.kill"           : () => {},
  "launcher.edit"           : () => {},
  "launcher.change-group"   : () => {},
  "launcher.folder"         : () => {},
  "launcher.export"         : () => {},
  "launcher.copy"           : () => {},
  "launcher.delete"         : () => {},
  "launcher.create-shortcut": () => {},
  "launcher.rename"         : () => {},
  "launcher.change-icon"    : () => {},
};
const disableStates = computed((): Record<
  typeof LauncherInstanceContextMenuItems[number]["Name"],
  boolean
> => {
  return {
    "launcher.launch"         : false,
    "launcher.kill"           : false,
    "launcher.edit"           : false,
    "launcher.change-group"   : false,
    "launcher.folder"         : false,
    "launcher.export"         : false,
    "launcher.copy"           : false,
    "launcher.delete"         : false,
    "launcher.create-shortcut": false,
    "launcher.rename"         : false,
    "launcher.change-icon"    : false,
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
    <button
      v-for="item in LauncherInstanceContextMenuItems"
      :key="item.Name"
      @click="actionStates[item.Name]"
      :disabled="disableStates[item.Name]"
      class="w-full flex items-center gap-3 rounded-md p-1 text-[#cdd6f4] transition-[background-color] disabled:cursor-default sm:gap-4 hover:bg-[#1d1a28] disabled:text-[#9298b6] disabled:transition-none disabled:hover:bg-none"
    >
      <span
        v-if="item.Icon"
        :class="['block h-[14px]', item.Icon]"
      />
      <Image
        v-else
        class-names="h-[14px]"
        :src="instance.Icon"
        :alt="`${instance.Name}'s icon`"
      />
      <span class="block text-nowrap text-[10px] sm:text-[13px]">
        {{ translate(item.Name, locale) }}
      </span>
    </button>
  </div>
</template>