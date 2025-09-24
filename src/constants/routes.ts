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
    "Website"     : "https://github.com/FreesmTeam/website",
  },
  "Telegram": {
    "Group": "https://t.me/freesmteam",
    "Chat" : "https://t.me/+DL82hkeJAq9kMTMy",
  },
};
export const TeamSocials: {
  "Maintainers": {
    "Key" : TranslationsType;
    "List": Array<{
      "Name"       : string;
      "Link"       : string;
      "Badge"      : string;
      "Image"      : string;
      "Description": TranslationsType;
    }>;
  };
  "Contributors": {
    "Key" : TranslationsType;
    "List": Array<{
      "Link" : string;
      "Image": string;
    }>;
  };
  "Special": {
    "Key"  : TranslationsType;
    "Entry": {
      "Link" : string;
      "Image": string;
    };
  };
} = {
  "Maintainers": {
    "Key" : "pages.home.team.maintainers.title",
    "List": [
      {
        "Name"       : "so5iso4ka",
        "Link"       : "https://github.com/so5iso4ka/",
        "Badge"      : "main developer",
        "Image"      : "https://avatars.githubusercontent.com/u/170882094?v=4",
        "Description": "pages.home.team.maintainers.list.so5iso4ka.description",
      },
      {
        "Name"       : "kaeeraa",
        "Link"       : "https://github.com/kaeeraa/",
        "Badge"      : "master-of-all-trades",
        "Image"      : "https://avatars.githubusercontent.com/u/99148867?v=4",
        "Description": "pages.home.team.maintainers.list.kaeeraa.description",
      },
      {
        "Name"       : "s0me1newithhand7s",
        "Link"       : "https://github.com/s0me1newithhand7s",
        "Badge"      : "creator",
        "Image"      : "https://avatars.githubusercontent.com/u/117505144?v=4",
        "Description": "pages.home.team.maintainers.list.s0me1newithhand7s.description",
      },
      {
        "Name"       : "windstone",
        "Link"       : "https://github.com/notwindstone/",
        "Badge"      : "creator",
        "Image"      : "https://avatars.githubusercontent.com/u/91563727?v=4",
        "Description": "pages.home.team.maintainers.list.windstone.description",
      },
    ],
  },
  "Contributors": {
    "Key" : "pages.home.team.contributors.title",
    "List": [
      {
        "Link" : "https://github.com/m3oweezed",
        "Image": "https://avatars.githubusercontent.com/u/76707795?v=4",
      },
      {
        "Link" : "https://github.com/qEniuu/",
        "Image": "https://avatars.githubusercontent.com/u/95589434?v=4",
      },
      {
        "Link" : "https://github.com/FoxyChipher",
        "Image": "https://avatars.githubusercontent.com/u/75834304?v=4",
      },
      {
        "Link" : "https://github.com/SophrTemin/",
        "Image": "/deleted-avatar.webp",
      },
      {
        "Link" : "https://github.com/sn1pp",
        "Image": "https://avatars.githubusercontent.com/u/79652963?v=4",
      },
      {
        "Link" : "https://github.com/viceversa03",
        "Image": "https://avatars.githubusercontent.com/u/109146971?v=4",
      },
      {
        "Link" : "https://github.com/ventureoo",
        "Image": "https://avatars.githubusercontent.com/u/92667539?v=4",
      },
      {
        "Link" : "https://t.me/chaoticbraincat",
        "Image": "/brainfluid.webp",
      },
      {
        "Link" : "https://github.com/Azarakash",
        "Image": "https://avatars.githubusercontent.com/u/228034665?v=4",
      },
      {
        "Link" : "https://github.com/mqsla",
        "Image": "https://avatars.githubusercontent.com/u/85938576?v=4",
      },
    ],
  },
  "Special": {
    "Key"  : "pages.home.team.special.title",
    "Entry": {
      "Link" : "https://elyprismlauncher.github.io/",
      "Image": "https://elyprismlauncher.github.io/assets/svg/org.prismlauncher.PrismLauncher.svg",
    },
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

export const RuntimeDownloadLink = {
  "FlatpakARM": "runtime-flatpak-arm",
  "FlatpakX86": "runtime-flatpak-x86",
  "AppImage"  : "runtime-app-image",
  "Qt5Linux"  : "runtime-qt5-linux",
  "Qt6Linux"  : "runtime-qt6-linux",
} as const;
export const DownloadLinks: Array<{
  "Title": string;
  "Links": Array<{
    "Icon" : string;
    "Name" : string;
    "Link" : string;
    "Extra": string;
  }>;
}> = [
  {
    "Title": "Windows",
    "Links": [],
  },
  {
    "Title": "Linux",
    "Links": [
      {
        "Icon" : "i-simple-icons-nixos",
        "Name" : "Nix",
        "Link" : "https://github.com/FreesmTeam/FreesmLauncher/blob/develop/flake.nix",
        "Extra": "Flake",
      },
      {
        "Icon" : "i-simple-icons-archlinux",
        "Name" : "Arch",
        "Link" : "https://aur.archlinux.org/packages/freesmlauncher",
        "Extra": "AUR",
      },
      {
        "Icon" : "i-simple-icons-debian",
        "Name" : "Debian",
        "Link" : "https://github.com/FreesmTeam/freesm-deb-pkgbuild",
        "Extra": ".deb",
      },
      {
        "Icon" : "i-simple-icons-flatpak",
        "Name" : "Flatpak aarch64",
        "Link" : RuntimeDownloadLink.FlatpakARM,
        "Extra": ".zip",
      },
      {
        "Icon" : "i-simple-icons-flatpak",
        "Name" : "Flatpak x86_64",
        "Link" : RuntimeDownloadLink.FlatpakX86,
        "Extra": ".zip",
      },
      {
        "Icon" : "i-simple-icons-linux",
        "Name" : "Portable Qt5",
        "Link" : RuntimeDownloadLink.Qt5Linux,
        "Extra": ".tar.gz",
      },
      {
        "Icon" : "i-simple-icons-linux",
        "Name" : "Portable Qt6",
        "Link" : RuntimeDownloadLink.Qt6Linux,
        "Extra": ".tar.gz",
      },
      {
        "Icon" : "i-simple-icons-linux",
        "Name" : "Portable",
        "Link" : RuntimeDownloadLink.AppImage,
        "Extra": ".AppImage",
      },
      {
        "Icon" : "i-simple-icons-gentoo",
        "Name" : "Gentoo",
        "Link" : "https://github.com/FreesmTeam/freesmlauncher-overlay",
        "Extra": "EBuild Overlay (archived)",
      },
    ],
  },
  {
    "Title": "macOS",
    "Links": [],
  },
];

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
      {
        "name": "footer.project.website",
        "link": Socials.Github.Website,
      },
    ],
  },
] as const;