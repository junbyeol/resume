import { kr } from "./kr.ts";
import { en } from "./en.ts";

export const locales = {
  kr,
  en,
};

export type Language = keyof typeof locales;
export { type LocaleSchema } from "./kr.ts";
