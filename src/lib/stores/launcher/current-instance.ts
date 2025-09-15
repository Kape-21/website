import { defineStore } from "pinia";

export const useCurrentInstance = defineStore("current-instance", {
  "state": () => ({
    "index": 0,
  }),
  "actions": {
    "setCurrent"(index: number) {
      this.index = index;
    },
  },
});