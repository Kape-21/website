import type { TranslationsType } from "@/types/translations.type.ts";
import type { GithubReleasesType } from "@/types/github-releases.type.ts";

export const ApplicationName = "Freesm Launcher";

export const LocaleContextKey = Symbol();
export const LocaleSelectorContextKey = Symbol();
export const LauncherContextKey = Symbol();
export const LauncherModalContextKey = Symbol();
export const LauncherModalEmbedContextKey = Symbol();
export const PageWrapperContextKey = Symbol();
export const DesktopTerminalContextKey = Symbol();

export const LocaleKey = "locale";
export const AccentAnimationKey = "accent-animation";
export const MobileSwipesKey = "mobile-swipes";

export const FeaturesSection: Array<{
  "Id"         : "auth" | "customization" | "prism" | "other";
  "Title"      : TranslationsType;
  "Description": TranslationsType;
  "Reverse"    : boolean;
}> = [
  {
    "Id"         : "prism",
    "Title"      : "pages.home.features.prism.title",
    "Description": "pages.home.features.prism.description",
    "Reverse"    : false,
  },
  {
    "Id"         : "auth",
    "Title"      : "pages.home.features.more-auth-servers.title",
    "Description": "pages.home.features.more-auth-servers.description",
    "Reverse"    : true,
  },
  {
    "Id"         : "customization",
    "Title"      : "pages.home.features.customization.title",
    "Description": "pages.home.features.customization.description",
    "Reverse"    : false,
  },
  {
    "Id"         : "other",
    "Title"      : "pages.home.features.other.title",
    "Description": "pages.home.features.other.description",
    "Reverse"    : true,
  },
];

export const FallbackLauncherData: GithubReleasesType = {
  "Name"     : "Freesm Launcher Sequoia 1.4.2",
  "Downloads": {
    "runtime-flatpak-arm"      : "https://github.com/FreesmTeam/FreesmLauncher/releases/download/sequoia-1.4.2/FreesmLauncher-Linux-6d80511-Flatpak-aarch64.flatpak.zip",
    "runtime-flatpak-x86"      : "https://github.com/FreesmTeam/FreesmLauncher/releases/download/sequoia-1.4.2/FreesmLauncher-Linux-6d80511-Flatpak-x86_64.flatpak.zip",
    "runtime-qt5-linux"        : "https://github.com/FreesmTeam/FreesmLauncher/releases/download/sequoia-1.4.2/FreesmLauncher-Linux-Qt5-Portable-sequoia-1.4.2.tar.gz",
    "runtime-qt6-linux"        : "https://github.com/FreesmTeam/FreesmLauncher/releases/download/sequoia-1.4.2/FreesmLauncher-Linux-Qt6-Portable-sequoia-1.4.2.tar.gz",
    "runtime-app-image"        : "https://github.com/FreesmTeam/FreesmLauncher/releases/download/sequoia-1.4.2/FreesmLauncher-Linux-x86_64.AppImage",
    "runtime-macos"            : "https://github.com/FreesmTeam/FreesmLauncher/releases/download/sequoia-1.4.2/FreesmLauncher-macOS-sequoia-1.4.2.zip",
    "runtime-setup-msvc-x86"   : "https://github.com/FreesmTeam/FreesmLauncher/releases/download/sequoia-1.4.2/FreesmLauncher-Windows-MSVC-Setup-sequoia-1.4.2.exe",
    "runtime-setup-mingw"      : "https://github.com/FreesmTeam/FreesmLauncher/releases/download/sequoia-1.4.2/FreesmLauncher-Windows-MinGW-w64-Setup-sequoia-1.4.2.exe",
    "runtime-setup-msvc-arm"   : "https://github.com/FreesmTeam/FreesmLauncher/releases/download/sequoia-1.4.2/FreesmLauncher-Windows-MSVC-arm64-Setup-sequoia-1.4.2.exe",
    "runtime-portable-msvc-x86": "https://github.com/FreesmTeam/FreesmLauncher/releases/download/sequoia-1.4.2/FreesmLauncher-Windows-MSVC-Portable-sequoia-1.4.2.zip",
    "runtime-portable-mingw"   : "https://github.com/FreesmTeam/FreesmLauncher/releases/download/sequoia-1.4.2/FreesmLauncher-Windows-MinGW-w64-Portable-sequoia-1.4.2.zip",
    "runtime-portable-msvc-arm": "https://github.com/FreesmTeam/FreesmLauncher/releases/download/sequoia-1.4.2/FreesmLauncher-Windows-MSVC-arm64-Portable-sequoia-1.4.2.zip",
  },
};

export const FreesmIssues: Array<{
  "Name"       : string;
  "Image"     ?: string;
  "Description": string;
}> = [
  {
    "Name"       : "How to install OptiFine without launching the original Minecraft Launcher?",
    "Description": "refer to https://www.reddit.com/r/Optifine/comments/jekh7u/comment/ipjqm5o/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  {
    "Name"       : "How to set your skin?",
    "Image"      : "",
    "Description": "",
  },
  {
    "Name"       : "https://t.me/freesmsupport/184",
    "Image"      : "",
    "Description": "your microsoft account doesn't have a bought minecraft. you need to use an 'Offline' option in account settings",
  },
  {
    "Name"       : "Why is there only an english language in the launcher?",
    "Image"      : "",
    "Description": "Try enabling or disabling your VPN or zapret",
  },
  {
    "Name"       : "My instance takes so long to launch",
    "Image"      : "",
    "Description": "Try enabling or disabling your VPN or zapret. If it didn't work, try changing your Java vendor or version in settings.",
  },
  {
    "Name"       : "'Java checker could not be found. Please check your installation'",
    "Image"      : "",
    "Description": "Unzip your portable version of launcher",
  },
  {
    "Name"       : "Other issues",
    "Image"      : "",
    "Description": "Try contacting us at discord or telegram",
  },
];