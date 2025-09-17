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
  "Icon"       : string;
  "Title"      : TranslationsType;
  "Description": TranslationsType;
}> = [
  {
    "Icon"       : "i-fluent-people-community-16-regular",
    "Title"      : "pages.home.features.open-source.title",
    "Description": "pages.home.features.open-source.description",
  },
  {
    "Icon"       : "i-fluent-lock-open-16-regular",
    "Title"      : "pages.home.features.drm-free.title",
    "Description": "pages.home.features.drm-free.description",
  },
  {
    "Icon"       : "i-fluent-flash-16-regular",
    "Title"      : "pages.home.features.performance.title",
    "Description": "pages.home.features.performance.description",
  },
  {
    "Icon"       : "i-fluent-settings-16-regular",
    "Title"      : "pages.home.features.customization.title",
    "Description": "pages.home.features.customization.description",
  },
];