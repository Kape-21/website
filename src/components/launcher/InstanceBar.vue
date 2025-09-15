<script setup lang="ts">
import { useAllInstances } from "@/lib/stores/launcher/all-instances.ts";
import { inject, ref } from "vue";
import type { ContextLauncherType } from "@/types/context-launcher.type.ts";
import { LauncherContextKey, LocaleContextKey } from "@/constants/application.ts";
import { useCatPackState } from "@/lib/stores/launcher/cat-pack-state.ts";
import { Groups } from "@/constants/launcher.ts";
import { translate } from "@/lib/translations/translate.ts";
import type { ContextLocaleType } from "@/types/context-locale.type.ts";
import InstanceButton from "@/components/launcher/InstanceButton.vue";

const locale = inject<ContextLocaleType>(LocaleContextKey);

const { barStates } = defineProps<{
  "barStates": {
    "news"    : boolean;
    "status"  : boolean;
    "instance": boolean;
  };
}>();
const hiddenGroups = ref<
  Record<typeof Groups[keyof typeof Groups], boolean>
>({
  "launcher.ungrouped"        : false,
  "launcher.placeholder-group": false,
});

const catStore = useCatPackState();
const instancesStore = useAllInstances();
const { maximized } = inject<ContextLauncherType>(LauncherContextKey) ?? {
  "maximized": false,
};
</script>

<template>
  <div
    :class="[
      'min-h-40 w-full flex flex-nowrap items-stretch gap-0',
      maximized && 'h-full',
      barStates.status ? 'rounded-b-none' : 'rounded-b-md',
    ]"
  >
    <!-- TODO instance left bar -->
    <div
      :class="[
        'w-full flex flex-col gap-2 bg-[#0c0c13] p-4',
        barStates.instance || barStates.status ? 'rounded-bl-none' : 'rounded-bl-md',
        barStates.status ? 'rounded-br-none' : 'rounded-br-md',
        catStore.enabled && 'bg-cover bg-center bg-no-repeat bg-[url(/assets/miside.webp)]',
      ]"
    >
      <template
        v-for="group in Object.values(Groups)"
        :key="group"
      >
        <button
          @click="() => hiddenGroups[group] = !hiddenGroups[group]"
          class="flex items-center gap-2 text-[10px] text-[#80859a] sm:text-[12px]"
        >
          <span class="block min-h-6 min-w-6">
            <span
              :class="[
                'block shrink-0 i-fluent-chevron-down-16-filled h-6 w-6 transition-[transform]',
                hiddenGroups[group] ? '-rotate-90' : 'rotate-0',
              ]"
            />
          </span>
          <span class="block shrink-0 font-bold">
            {{ translate(group, locale) }}
          </span>
          <span class="block h-[2px] w-full bg-[#15161e]" />
        </button>
        <div
          v-show="!hiddenGroups[group]"
          class="flex flex-wrap gap-2"
        >
          <InstanceButton
            v-for="instance in instancesStore.instances"
            :key="instance.Name"
          />
        </div>
      </template>
    </div>
  </div>
</template>