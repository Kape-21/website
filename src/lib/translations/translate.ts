import type { LocaleType } from "@/types/locale.type.ts";

/* Translations */
import English from "@/locales/en.json";
import Russian from "@/locales/ru.json";
import Ukrainian from "@/locales/ua.json";
import Farsi from "@/locales/fa.json";

export function translate(key: keyof typeof English, locale: LocaleType | undefined): string {
  switch (locale) {
    case "ru": {
      return Russian[key];
    }
    case "ua": {
      return Ukrainian[key];
    }
    case "fa": {
      return Farsi[key];
    }
    default: {
      return English[key];
    }
  }
}