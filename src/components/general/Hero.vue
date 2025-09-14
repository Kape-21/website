<script setup lang="ts">
import { UAParser } from "ua-parser-js";

const { os } = UAParser(navigator.userAgent);
</script>

<template>
  <div>
    {{ os?.name }}
  </div>
</template>