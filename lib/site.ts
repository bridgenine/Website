export const site = {
  name: "Bridgenine",
  url: "https://www.bridgenine.com",
  domain: "www.bridgenine.com",
} as const;

export const languages = ["en", "id"] as const;

export type Lang = (typeof languages)[number];

export function isLang(value: string): value is Lang {
  return value === "en" || value === "id";
}
