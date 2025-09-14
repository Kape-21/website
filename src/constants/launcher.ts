import type { TranslationsType } from "@/types/translations.type.ts";

export const LauncherTabs: Array<{
  "Icon"     : string;
  "Name"?    : TranslationsType;
  "Disabled"?: boolean;
}> = [
  {
    "Icon"    : "i-fluent-add-square-24-regular",
    "Name"    : "launcher.add-instance",
    "Disabled": true,
  },
  {
    "Icon"    : "i-fluent-folder-24-regular",
    "Name"    : "launcher.folders",
    "Disabled": true,
  },
  {
    "Icon"    : "i-fluent-settings-24-regular",
    "Name"    : "launcher.settings",
    "Disabled": true,
  },
  {
    "Icon"    : "i-fluent-chat-help-24-regular",
    "Name"    : "launcher.help",
    "Disabled": true,
  },
  {
    "Icon"    : "i-fluent-phone-update-24-regular",
    "Name"    : "launcher.update",
    "Disabled": true,
  },
  {
    "Icon": "i-fluent-animal-cat-24-regular",
  },
];