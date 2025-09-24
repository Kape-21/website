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
    "runtime-flatpak-arm": "https://github.com/FreesmTeam/FreesmLauncher/releases/download/sequoia-1.4.2/FreesmLauncher-Linux-6d80511-Flatpak-aarch64.flatpak.zip",
    "runtime-flatpak-x86": "https://github.com/FreesmTeam/FreesmLauncher/releases/download/sequoia-1.4.2/FreesmLauncher-Linux-6d80511-Flatpak-x86_64.flatpak.zip",
    "runtime-qt5-linux"  : "https://github.com/FreesmTeam/FreesmLauncher/releases/download/sequoia-1.4.2/FreesmLauncher-Linux-Qt5-Portable-sequoia-1.4.2.tar.gz",
    "runtime-qt6-linux"  : "https://github.com/FreesmTeam/FreesmLauncher/releases/download/sequoia-1.4.2/FreesmLauncher-Linux-Qt6-Portable-sequoia-1.4.2.tar.gz",
    "runtime-app-image"  : "https://github.com/FreesmTeam/FreesmLauncher/releases/download/sequoia-1.4.2/FreesmLauncher-Linux-x86_64.AppImage",
  },
};