<script setup lang="ts">
import { LauncherModalEmbedContextKey } from "@/constants/application.ts";
import LauncherModal from "@/components/launcher/modals/LauncherModal.vue";
import { useCurrentInstance } from "@/lib/stores/launcher/current-instance.ts";
import { computed } from "vue";
import { EaglerCraftID, EaglerCraftNewID } from "@/constants/launcher.ts";

const currentInstanceStore = useCurrentInstance();
const areEmbeds = computed(
  (): boolean => (
    currentInstanceStore.launched === EaglerCraftID ||
    currentInstanceStore.launched === EaglerCraftNewID
  ));
const currentEmbed = computed((): string => {
  switch (currentInstanceStore.launched) {
    case EaglerCraftID: {
      return "https://sd592g.github.io/zj684od4lfg/";
    }
    case EaglerCraftNewID: {
      return "https://eaglercraft.org/";
    }
    default: {
      return "";
    }
  }
});
</script>

<template>
  <!-- We dynamically render it so that embeds will not load before necessary -->
  <LauncherModal
    v-if="areEmbeds"
    :context-key="LauncherModalEmbedContextKey"
    opened
    use-teleport
  >
    <iframe
      width="100%"
      height="100%"
      :src="currentEmbed"
    />
  </LauncherModal>
</template>