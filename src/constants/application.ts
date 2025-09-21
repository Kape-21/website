import type { TranslationsType } from "@/types/translations.type.ts";

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