import type { Locale } from "./config";
import * as es from "./messages/es";
import * as en from "./messages/en";

export type Messages = typeof es;

export const dictionaries: Record<Locale, Messages> = {
  es,
  en: en as unknown as Messages,
};
