<script setup lang="ts">
import { UAParser } from "ua-parser-js";
import { getPlatformName } from "@/lib/helpers/get-platform-name.ts";

const { os } = UAParser(navigator.userAgent);
const platform = getPlatformName(os?.name);
</script>

<template>
  <div @contextmenu.prevent>
    {{ platform }}
  </div>
</template>