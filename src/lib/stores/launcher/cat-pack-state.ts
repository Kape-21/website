import { defineStore } from "pinia";

export const useCatPackState = defineStore("cat-pack", {
  "state": () => ({
    "enabled": true,
  }),
  "actions": {
    "toggle"() {
      this.enabled = !this.enabled;
    },
  },
});