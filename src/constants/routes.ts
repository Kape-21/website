import { createRoute } from "@kitbag/router";
import { defineAsyncComponent } from "vue";
import Compass from "@/components/icons/Compass.vue";
import Book from "@/components/icons/Book.vue";
import Downloading from "@/components/icons/Downloading.vue";
import Blocks from "@/components/icons/Blocks.vue";
import type { TranslationsType } from "@/types/translations.type.ts";

export const Routes = {
  "Home": {
    "Key" : "Home",
    "Name": "routes.home.name",
    "Icon": Compass,
    "Path": "/",
  },
  "Downloads": {
    "Key" : "Downloads",
    "Name": "routes.downloads.name",
    "Icon": Downloading,
    "Path": "/downloads",
  },
  "FAQ": {
    "Key" : "FAQ",
    "Name": "routes.faq.name",
    "Icon": Book,
    "Path": "/faq",
  },
  "Themes": {
    "Key" : "Themes",
    "Name": "routes.themes.name",
    "Icon": Blocks,
    "Path": "/themes",
  },
} as const;
export const RoutesArray: Array<{
  "Key" : string;
  "Name": TranslationsType;
  "Icon": typeof Routes["Home"]["Icon"];
  "Path": `/${string}`;
}> = Object.values(Routes);
export const Redirects: {
  "left": Record<
    typeof Routes[keyof typeof Routes]["Path"],
    typeof Routes[keyof typeof Routes]["Path"]
  >;
  "right": Record<
    typeof Routes[keyof typeof Routes]["Path"],
    typeof Routes[keyof typeof Routes]["Path"]
  >;
} = {
  "left": {
    "/"         : "/downloads",
    "/downloads": "/faq",
    "/faq"      : "/themes",
    "/themes"   : "/",
  },
  "right": {
    "/downloads": "/",
    "/faq"      : "/downloads",
    "/themes"   : "/faq",
    "/"         : "/themes",
  },
};
export const RoutesConfiguration = Object
  .values(Routes)
  .map(({ Key, Path }) => createRoute({
    "name"     : Key,
    "path"     : Path,
    "component": defineAsyncComponent(() => import(`@/pages/${Key}.vue`)),
  }));

export const ExternalLinks = [
  {
    "Key" : "Github",
    // Somehow this icon is not loaded by UnoCSS...
    "Icon": "i-mdi-github",
    "Link": "https://github.com/FreesmTeam/FreesmLauncher",
  },
  {
    "Key" : "Telegram",
    // Somehow this icon is not loaded by UnoCSS...
    "Icon": "i-mdi-telegram",
    "Link": "https://t.me/freesmteam",
  },
] as const;