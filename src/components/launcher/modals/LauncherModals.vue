<script setup lang="ts">
import { useAllInstances } from "@/lib/stores/launcher/all-instances.ts";
import { computed, inject, provide, ref } from "vue";
import { Deleted } from "@/constants/launcher.ts";
import type { LauncherInstanceType } from "@/types/launcher-instance.type.ts";
import { UAParser } from "ua-parser-js";
import { getPlatformName } from "@/lib/helpers/get-platform-name.ts";
import LinuxHeader from "@/components/launcher/headers/LinuxHeader.vue";
import WindowsHeader from "@/components/launcher/headers/WindowsHeader.vue";
import MacHeader from "@/components/launcher/headers/MacHeader.vue";
import { LauncherModalContextKey, LocaleContextKey } from "@/constants/application.ts";
import type { ContextLauncherType } from "@/types/context-launcher.type.ts";
import { translate } from "@/lib/translations/translate.ts";
import type { ContextLocaleType } from "@/types/context-locale.type.ts";

const locale = inject<ContextLocaleType>(LocaleContextKey);

const { os } = UAParser(navigator.userAgent);
const platform = getPlatformName(os?.name);

const allInstances = useAllInstances();
const deletingInstance = computed((): LauncherInstanceType | undefined => {
  return allInstances
    .instances
    .find(searching => searching.Deleted === Deleted.Process);
});

function deleteInstance() {
  if (deletingInstance.value === undefined) {
    return;
  }

  allInstances.delete(deletingInstance.value.Id);
}
function close() {
  allInstances.instances = allInstances
    .instances
    .map(mapping => {
      if (mapping.Id !== deletingInstance.value?.Id) {
        return mapping;
      }

      return {
        ...mapping,
        "Deleted": Deleted.No,
      };
    });
}

const actions = [
  { "name": "launcher.yes", "action": deleteInstance },
  { "name": "launcher.no", "action": close },
] as const;

provide<ContextLauncherType>(LauncherModalContextKey, {
  close,
  "title"    : computed(() => translate("launcher.confirm-deletion.title", locale?.value)),
  "maximized": ref<boolean>(false),
  "maximize" : () => {},
  "minimize" : () => {},
});
</script>

<template>
  <div
    :class="[
      'absolute left-[50%] top-[50%] z-1500 flex flex-col gap-0 rounded-md',
      'bg-catppuccin-900 text-white transition-[opacity,transform] duration-300',
      'translate-x-[-50%] translate-y-[-50%]',
      deletingInstance !== undefined
        ? 'visible opacity-100 scale-100'
        : 'invisible opacity-0 scale-85',
    ]"
  >
    <WindowsHeader
      :context-key="LauncherModalContextKey"
      v-if="platform === 'Windows'"
      only-close-button
    />
    <MacHeader
      :context-key="LauncherModalContextKey"
      v-else-if="platform === 'macOS'"
      only-close-button
    />
    <LinuxHeader
      :context-key="LauncherModalContextKey"
      only-close-button
      v-else
    />
    <div class="flex flex-col gap-4 rounded-b-md px-[6px] pb-[6px] pt-[2px] text-xs text-[#cdd6f4] sm:px-2 sm:pb-2 sm:text-sm">
      <div class="whitespace-pre-wrap">
        {{
          translate("launcher.confirm-deletion.description", locale)
            .replace("%s", deletingInstance?.Name ?? "")
        }}
      </div>
      <div class="flex items-center justify-end gap-2">
        <button
          v-for="button in actions"
          :key="button.name"
          @click="button.action"
          class="grid h-7 w-14 place-items-center rounded-md bg-[#1e1c2a] transition-[background-color] hover:bg-[#2e283e]"
        >
          {{ translate(button.name, locale) }}
        </button>
      </div>
    </div>
  </div>
</template>