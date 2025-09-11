<script setup lang="ts">
import { RouterView } from "@kitbag/router";
import Layout from "@/components/layout/Layout.vue";
</script>

<template>
  <div v-show="false">
    <!-- This block contains UnoCSS icons that somehow are not included in the bundle -->
    <span class="i-mdi-github i-mdi-telegram" />
  </div>
  <Layout>
    <RouterView />
  </Layout>
</template>