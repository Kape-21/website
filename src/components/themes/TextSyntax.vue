<script setup lang="ts">
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";

const { language, label } = defineProps<{
  "language": "css" | "json";
  "label"   : string;
}>();
</script>

<template>
  <SshPre :language="language" :label="label" copy-button>
    <slot />
  </SshPre>
</template>