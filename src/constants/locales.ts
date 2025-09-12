export const Locales = [
  {
    "Code": "en",
    "Name": "English",
    "Flag": "\uD83C\uDDEC\uD83C\uDDE7",
  },
  {
    "Code": "ru",
    "Name": "Русский",
    "Flag": "\uD83C\uDDF7\uD83C\uDDFA",
  },
  {
    "Code": "ua",
    "Name": "Українська",
    "Flag": "\uD83C\uDDFA\uD83C\uDDE6",
  },
] as const;
export const LocalesArray = Locales.map(({ Code }) => Code);
export const DefaultLocale = Locales[0].Code;