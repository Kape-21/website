<script setup lang="ts">
import type { LauncherInstanceType } from "@/types/launcher-instance.type.ts";
import { computed, inject } from "vue";
import type { ContextLocaleType } from "@/types/context-locale.type.ts";
import { LocaleContextKey } from "@/constants/application.ts";
import Image from "@/components/base/Image.vue";
import { useCurrentInstance } from "@/lib/stores/launcher/current-instance.ts";
import { useAllInstances } from "@/lib/stores/launcher/all-instances.ts";

const locale = inject<ContextLocaleType>(LocaleContextKey);

console.log(locale?.value);
const { instance } = defineProps<{
  "instance": LauncherInstanceType;
}>();

const currentInstanceStore = useCurrentInstance();
const allInstancesStore = useAllInstances();
const currentInstance = computed(
  (): LauncherInstanceType => allInstancesStore
    .instances
    .find(
      (_, index) => index === currentInstanceStore.index,
    ) ?? allInstancesStore.instances[0],
);

const instanceIconFilters = computed(() => (
  instance.Name === currentInstance.value.Name ? "saturate-[200%] contrast-[20%] brightness-[125%]" : ""
));

function selectInstance() {
  const instanceIndex: number = allInstancesStore
    .instances
    .findIndex(searching => searching.Name === instance.Name);

  if (instanceIndex === -1) {
    console.error("Could not find an instance index");

    return;
  }

  currentInstanceStore.setCurrent(instanceIndex);
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
  </button>
</template>