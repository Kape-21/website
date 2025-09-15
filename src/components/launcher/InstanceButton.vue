<script setup lang="ts">
import type { LauncherInstanceType } from "@/types/launcher-instance.type.ts";
import { computed, inject, ref, useTemplateRef } from "vue";
import type { ContextLocaleType } from "@/types/context-locale.type.ts";
import { LocaleContextKey } from "@/constants/application.ts";
import Image from "@/components/base/Image.vue";
import { useCurrentInstance } from "@/lib/stores/launcher/current-instance.ts";
import { useAllInstances } from "@/lib/stores/launcher/all-instances.ts";
import { onClickOutside } from "@vueuse/core";

const locale = inject<ContextLocaleType>(LocaleContextKey);

console.log(locale?.value);
const { instance } = defineProps<{
  "instance": LauncherInstanceType;
}>();

const renamingValue = ref<string>(instance.Name);

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
  () => currentInstanceStore.id === instance.Id && currentInstanceStore.renaming,
);
const instanceIconFilters = computed(() => (
  instance.Name === currentInstance.value.Name ? "saturate-[200%] contrast-[20%] brightness-[125%]" : ""
));

const textareaTarget = useTemplateRef<HTMLElement>("textareaTarget");

onClickOutside(textareaTarget, () => {
  if (!isBeingRenamed.value) {
    return;
  }

  currentInstanceStore.setRenaming(false);

  if (renamingValue.value.trim() === "") {
    return;
  }

  allInstancesStore.rename(instance.Id, renamingValue.value);
});

function selectInstance() {
  currentInstanceStore.setCurrent(instance.Id);
}
function handleTextareaKeys(event: KeyboardEvent) {
  if (event.key !== "Enter") {
    return;
  }

  event.preventDefault();
  currentInstanceStore.setRenaming(false);

  if (renamingValue.value.trim() === "") {
    return;
  }

  allInstancesStore.rename(instance.Id, renamingValue.value);
}
</script>

<template>
  <button
    id="__instance-selector"
    @click="selectInstance"
    @dblclick="() => {}"
    @contextmenu="() => {}"
    class="relative h-fit w-25 flex flex-col items-center justify-start gap-2"
  >
    <span
      :class="[
        'i-fluent-play-circle-16-filled absolute right-0 top-0 block h-7 w-7 text-[#dcdff2]',
        instance.Launched ? 'visible' : 'invisible',
      ]"
    />
    <span
      class="block cursor-default transition-[opacity]"
    ><!-- TODO context menu --></span>
    <Image
      :class-names="`w-12 h-12 !transition-[opacity,filter] ${instanceIconFilters}`"
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