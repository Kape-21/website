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
  {
    "Code": "fa",
    "Name": "فارسی",
    "Flag": "\uD83C\uDDEE\uD83C\uDDF7",
  },
  {
    "Code": "pl",
    "Name": "Polski",
    "Flag": "\uD83C\uDDF5\uD83C\uDDF1",
  },
] as const;
export const LocalesArray = Locales.map(({ Code }) => Code);
export const DefaultLocale = Locales[0].Code;
