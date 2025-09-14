import { Deleted, Groups } from "@/constants/launcher.ts";

export type LauncherInstanceType = {
  "Name"    : string;
  "Version" : string;
  "Group"   : typeof Groups[keyof typeof Groups];
  "Icon"    : string;
  "Launched": boolean;
  "Deleted" : typeof Deleted[keyof typeof Deleted];
};