import type { ComputedRef, Ref } from "vue";

export type ContextLauncherType = {
  "title"    : string | ComputedRef<string>;
  "maximized": Ref<boolean, boolean>;
  "maximize" : () => void;
  "minimize" : () => void;
  "close"    : () => void;
};