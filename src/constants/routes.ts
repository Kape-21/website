import { createRoute } from "@kitbag/router";
import { defineAsyncComponent } from "vue";

export const Routes = {
  "Home": {
    "Key" : "Home",
    "Path": "/",
  },
  "Downloads": {
    "Key" : "Downloads",
    "Path": "/downloads",
  },
  "FAQ": {
    "Key" : "FAQ",
    "Path": "/faq",
  },
  "About": {
    "Key" : "About",
    "Path": "/about",
  },
  "Theme": {
    "Key" : "Theme",
    "Path": "/theme",
  },
} as const;
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
    "Icon": "i-mdi-github",
    "Link": "https://github.com/FreesmTeam/FreesmLauncher",
  },
  {
    "Key" : "Telegram",
    "Icon": "i-mdi-telegram",
    "Link": "https://t.me/freesmteam",
  },
] as const;