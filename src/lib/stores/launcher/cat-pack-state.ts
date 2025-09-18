import { defineStore } from "pinia";

export const useCatPackState = defineStore("cat-pack", {
  "state": () => ({
    "enabled": true,
    "image"  : "/assets/miside.webp",
  }),
  "actions": {
    "toggle"() {
      this.enabled = !this.enabled;
    },
    "change"(newImage: string) {
      this.image = newImage;
    },
  },
});