import type { TranslationsType } from "@/types/translations.type.ts";
import type { LauncherInstanceType } from "@/types/launcher-instance.type.ts";

export const EaglerCraftName = "EaglerCraft 1.5.2";
export const ClassicMinecraftName = "Minecraft Classic";
export const Groups = {
  "None"       : "launcher.ungrouped",
  "Placeholder": "launcher.placeholder-group",
} as const;
export const Deleted = {
  "Process": "launcher.in-the-process",
  "Yes"    : "launcher.yes",
  "No"     : "launcher.no",
} as const;

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
  "Name"  : TranslationsType;
  "Icon"? : string;
  "Image"?: string;
  "Note"? : TranslationsType;
}> = [
  {
    "Name" : "users.windstone_",
    "Image": "/skins/windstone.png",
    "Note" : "launcher.maintainer",
  },
  {
    "Name" : "users.hand7s",
    "Image": "/skins/hand7s.png",
    "Note" : "launcher.maintainer",
  },
  {
    "Name" : "users.kaeeraa",
    "Image": "/skins/kaeeraa.png",
    "Note" : "launcher.maintainer",
  },
  {
    "Name" : "users.so5iso4ka",
    "Image": "/skins/so5iso4ka.png",
    "Note" : "launcher.maintainer",
  },
  {
    "Name" : "launcher.no-default-account",
    "Image": "/skins/monochrome_steve.png",
    "Note" : "launcher.profile-hotkey",
  },
  {
    "Name": "launcher.manage-accounts",
    "Icon": "i-fluent-people-16-regular",
  },
];
export const LauncherInstances: Array<LauncherInstanceType> = [
  {
    "Id"     : "eagler",
    "Name"   : EaglerCraftName,
    "Version": "1.5.2",
    "Group"  : Groups.None,
    "Icon"   : "/assets/grass.svg",
    "Deleted": Deleted.No,
  },
  {
    "Id"     : "classic",
    "Name"   : ClassicMinecraftName,
    "Version": "1.0",
    "Group"  : Groups.None,
    "Icon"   : "/assets/grass.svg",
    "Deleted": Deleted.No,
  },
  {
    "Id"     : "new",
    "Name"   : "1.21",
    "Version": "1.21",
    "Group"  : Groups.Placeholder,
    "Icon"   : "/assets/grass.svg",
    "Deleted": Deleted.No,
  },
  {
    "Id"     : "old",
    "Name"   : "1.12.2",
    "Version": "1.12.2",
    "Group"  : Groups.Placeholder,
    "Icon"   : "/assets/stone.svg",
    "Deleted": Deleted.No,
  },
  {
    "Id"     : "modpack",
    "Name"   : "Some 1.16.5 modpack with a long name",
    "Version": "1.16.5",
    "Group"  : Groups.Placeholder,
    "Icon"   : "/assets/diamond.svg",
    "Deleted": Deleted.No,
  },
];