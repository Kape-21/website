import { defineStore } from "pinia";
import { LauncherInstances } from "@/constants/launcher.ts";

export const useAllInstances = defineStore("all-instances", {
  "state": () => ({
    "instances": LauncherInstances,
  }),
  "actions": {
    "delete"(id: string) {
      this.instances = this.instances.filter(instance => instance.Id !== id);
    },
    "rename"(id: string, to: string) {
      this.instances = this.instances.map(instance => {
        if (instance.Id !== id) {
          return instance;
        }

        return {
          ...instance,
          "Name": to,
        };
      });
    },
  },
});