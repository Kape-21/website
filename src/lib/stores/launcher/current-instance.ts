import { defineStore } from "pinia";
import { LauncherInstances } from "@/constants/launcher.ts";

export const useCurrentInstance = defineStore("current-instance", {
  "state": () => ({
    "id"      : LauncherInstances[0].Id,
    "renaming": false,
  }),
  "actions": {
    "setCurrent"(id: string) {
      this.id = id;
    },
    "setRenaming"(state: boolean) {
      this.renaming = state;
    },
  },
});