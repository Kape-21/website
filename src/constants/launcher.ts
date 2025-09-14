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
export const LauncherMenuBarProfiles: Array<{
  "Name"  : string;
  "Icon"? : string;
  "Image"?: string;
  "Note"? : string;
}> = [
  {
    "Name" : "users.windstone_",
    "Image": "/skins/windstone.png",
    "Note" : "Maintainer",
  },
  {
    "Name" : "users.hand7s",
    "Image": "/skins/hand7s.png",
    "Note" : "Maintainer",
  },
  {
    "Name" : "users.kaeeraa",
    "Image": "/skins/kaeeraa.png",
    "Note" : "Maintainer",
  },
  {
    "Name" : "users.so5iso4ka",
    "Image": "/skins/so5iso4ka.png",
    "Note" : "Maintainer",
  },
  {
    "Name" : "launcher.no-default-account",
    "Image": "/skins/monochrome_steve.png",
    "Note" : "Ctrl+0",
  },
  {
    "Name": "launcher.manage-accounts",
    "Icon": "i-fluent-people-16-regular",
  },
];