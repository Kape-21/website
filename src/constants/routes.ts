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

export const Socials = {
  "Github": {
    "Home"        : "https://github.com/FreesmTeam/FreesmLauncher",
    "Issues"      : "https://github.com/FreesmTeam/FreesmLauncher/issues",
    "Contribute"  : "https://github.com/FreesmTeam/FreesmLauncher/blob/develop/CONTRIBUTING.md",
    "Organization": "https://github.com/FreesmTeam/",
  },
  "Telegram": {
    "Group": "https://t.me/freesmteam",
    "Chat" : "https://t.me/+DL82hkeJAq9kMTMy",
  },
};

export const ExternalLinks = [
  {
    "Key" : "Github",
    // Somehow this icon is not loaded by UnoCSS...
    "Icon": "i-mdi-github",
    "Link": Socials.Github.Home,
  },
  {
    "Key" : "Telegram",
    // Somehow this icon is not loaded by UnoCSS...
    "Icon": "i-mdi-telegram",
    "Link": Socials.Telegram.Group,
  },
] as const;

export const FooterLinks = [
  {
    "title": "footer.about.title",
    "links": [
      {
        "name": "footer.about.link.contribute",
        "link": Socials.Github.Contribute,
      },
      {
        "name": "footer.about.link.faq",
        "link": Routes.FAQ.Path,
      },
      {
        "name": "footer.about.link.download",
        "link": Routes.Downloads.Path,
      },
    ],
  },
  {
    "title": "footer.community.title",
    "links": [
      {
        "name": "footer.community.link.telegram-channel",
        "link": Socials.Telegram.Group,
      },
      {
        "name": "footer.community.link.telegram-chat",
        "link": Socials.Telegram.Chat,
      },
      {
        "name": "footer.community.link.follow-on-github",
        "link": Socials.Github.Organization,
      },
    ],
  },
  {
    "title": "footer.project.title",
    "links": [
      {
        "name": "footer.project.source-code",
        "link": Socials.Github.Home,
      },
      {
        "name": "footer.project.github-issues",
        "link": Socials.Github.Issues,
      },
    ],
  },
] as const;