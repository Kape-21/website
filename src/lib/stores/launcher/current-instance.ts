import { defineStore } from "pinia";
import { LauncherInstances } from "@/constants/launcher.ts";
import type { LauncherInstanceType } from "@/types/launcher-instance.type.ts";

export const useCurrentInstance = defineStore("current-instance", {
  "state": () => ({
    "instance": LauncherInstances[0],
  }),
  "actions": {
    "setCurrent"(instance: LauncherInstanceType) {
      this.instance = instance;
    },
  },
});