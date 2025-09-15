import { defineStore } from "pinia";
import { LauncherInstances } from "@/constants/launcher.ts";

export const useAllInstances = defineStore("all-instances", {
  "state": () => ({
    "instances": LauncherInstances,
  }),
  "actions": {
    "delete"(name: string) {
      this.instances = this.instances.filter(instance => instance.Name !== name);
    },
    "rename"(name: string, to: string) {
      this.instances = this.instances.map(instance => {
        if (instance.Name !== name) {
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