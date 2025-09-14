import type { Ref } from "vue";

export type ContextLauncherType = {
  "title"    : string;
  "maximized": Ref<boolean, boolean>;
  "maximize" : () => void;
  "minimize" : () => void;
  "close"    : () => void;
};