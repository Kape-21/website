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

export const FeaturesSection: Array<{
  "Id"         : "auth" | "customization" | "other";
  "Title"      : TranslationsType;
  "Description": TranslationsType;
  "Reverse"    : boolean;
}> = [
  {
    "Id"         : "auth",
    "Title"      : "pages.home.features.more-auth-servers.title",
    "Description": "pages.home.features.more-auth-servers.description",
    "Reverse"    : false,
  },
  {
    "Id"         : "customization",
    "Title"      : "pages.home.features.customization.title",
    "Description": "pages.home.features.customization.description",
    "Reverse"    : true,
  },
  {
    "Id"         : "other",
    "Title"      : "pages.home.features.other.title",
    "Description": "pages.home.features.other.description",
    "Reverse"    : false,
  },
];