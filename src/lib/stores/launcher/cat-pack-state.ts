import { defineStore } from "pinia";

export const useCatPackState = defineStore("cat-pack", {
  "state": () => ({
    "enabled": false,
  }),
  "actions": {
    "toggle"() {
      this.enabled = !this.enabled;
    },
  },
});