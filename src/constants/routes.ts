import { createRoute } from "@kitbag/router";
import { defineAsyncComponent } from "vue";
import Compass from "@/components/icons/Compass.vue";
import Book from "@/components/icons/Book.vue";
import Downloading from "@/components/icons/Downloading.vue";
import Blocks from "@/components/icons/Blocks.vue";

export const Routes = {
  "Home": {
    "Key" : "Home",
    "Icon": Compass,
    "Path": "/",
  },
  "Downloads": {
    "Key" : "Downloads",
    "Icon": Downloading,
    "Path": "/downloads",
  },
  "FAQ": {
    "Key" : "FAQ",
    "Icon": Book,
    "Path": "/faq",
  },
  "Themes": {
    "Key" : "Themes",
    "Icon": Blocks,
    "Path": "/themes",
  },
} as const;
export const RoutesArray: Array<{
  "Key" : string;
  "Icon": typeof Routes["Home"]["Icon"];
  "Path": `/${string}`;
}> = Object.values(Routes);
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