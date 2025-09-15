<script setup lang="ts">
import type { LauncherInstanceType } from "@/types/launcher-instance.type.ts";
import { computed, inject, ref, shallowRef, useTemplateRef } from "vue";
import type { ContextLocaleType } from "@/types/context-locale.type.ts";
import { LocaleContextKey } from "@/constants/application.ts";
import Image from "@/components/base/Image.vue";
import { useCurrentInstance } from "@/lib/stores/launcher/current-instance.ts";
import { useAllInstances } from "@/lib/stores/launcher/all-instances.ts";
import { onClickOutside, useEventListener } from "@vueuse/core";

const locale = inject<ContextLocaleType>(LocaleContextKey);

console.log(locale?.value);
const { instance } = defineProps<{
  "instance": LauncherInstanceType;
}>();

const renamingValue = ref<string>(instance.Name);
const contextMenu = shallowRef<{
  "opened": boolean;
  "x"     : number;
  "y"     : number;
}>({
  "opened": false,
  "x"     : 0,
  "y"     : 0,
});

const allInstancesStore = useAllInstances();
const currentInstanceStore = useCurrentInstance();
const currentInstance = computed(
  (): LauncherInstanceType => allInstancesStore
    .instances
    .find(
      searching => searching.Id === currentInstanceStore.id,
    ) ?? allInstancesStore.instances[0],
);

const isBeingRenamed = computed(
  () => instance.Id === currentInstanceStore.renaming,
);
const isLaunched = computed(
  () => instance.Id === currentInstanceStore.launched,
);
const instanceIconFilters = computed(() => (
  instance.Name === currentInstance.value.Name ? "saturate-[200%] contrast-[20%] brightness-[125%]" : ""
));

const textareaTarget = useTemplateRef<HTMLElement>("textareaTarget");
const contextTarget = useTemplateRef<HTMLElement>("contextTarget");

onClickOutside(textareaTarget, () => {
  if (!isBeingRenamed.value) {
    return;
  }

  currentInstanceStore.setRenaming(undefined);

  if (renamingValue.value.trim() === "") {
    return;
  }

  allInstancesStore.rename(instance.Id, renamingValue.value);
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
    !("id" in event.target) ||
    event.target.id !== `__instance-selector-${instance.Id}`
  ) {
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

function selectInstance() {
  currentInstanceStore.setCurrent(instance.Id);
}
function handleTextareaKeys(event: KeyboardEvent) {
  if (event.key !== "Enter") {
    return;
  }

  event.preventDefault();
  currentInstanceStore.setRenaming(undefined);

  if (renamingValue.value.trim() === "") {
    return;
  }

  allInstancesStore.rename(instance.Id, renamingValue.value);
}
function handleDoubleClick(event: MouseEvent) {
  // Don't launch an instance if target element wasn't an instance selector button
  if (
    event.target === null ||
    !("id" in event.target) ||
    event.target.id !== `__instance-selector-${instance.Id}`
  ) {
    return;
  }

  currentInstanceStore.setLaunched(instance.Id);
}
</script>

<template>
  <button
    :id="`__instance-selector-${instance.Id}`"
    @click="selectInstance"
    @dblclick="handleDoubleClick"
    class="relative h-fit w-25 flex flex-col items-center justify-start gap-2"
  >
    <span
      :class="[
        'i-fluent-play-circle-16-filled absolute right-0 top-0 block h-7 w-7 text-[#dcdff2]',
        isLaunched ? 'visible' : 'invisible',
      ]"
    />
    <span
      ref="contextTarget"
      :class="[
        'absolute z-1000 flex flex-col cursor-default gap-1',
        'border border-[#181822] bg-catppuccin-900 p-1 transition-[opacity]',
        contextMenu.opened
          ? 'visible opacity-100'
          : 'invisible opacity-0',
      ]"
      :style="{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }"
    >
      <span class="block p-1 text-center text-nowrap text-[10px] text-[#9da3bd] sm:text-[13px]">
        {{ instance.Name }}
      </span>
    </span>
    <Image
      :class-names="`pointer-events-none w-12 h-12 !transition-[opacity,filter] ${instanceIconFilters}`"
      :src="instance.Icon"
      :alt="`${instance.Name}'s instance icon`"
    />
    <textarea
      v-if="isBeingRenamed"
      ref="textareaTarget"
      @keydown="handleTextareaKeys"
      :placeholder="instance.Name"
      v-model="renamingValue"
      class="w-25 resize-none border border-mauve bg-[#0c0c13] px-[2px] text-center text-[10px] text-white outline-none sm:text-[13px] focus:outline-none"
      autofocus
    />
    <span
      v-else
      :class="[
        'w-full break-words text-center text-[10px] text-[#cdd6f4] sm:text-[13px]',
        currentInstance.Id === instance.Id
          ? 'bg-[#a285c6]'
          : 'bg-[#040407]',
      ]"
    >
      {{ instance.Name }}
    </span>
  </button>
</template>