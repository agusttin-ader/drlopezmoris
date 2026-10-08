import type { Locale } from "./config";
import * as es from "./messages/es";
import * as en from "./messages/en";
import * as pt from "./messages/pt";
import * as ru from "./messages/ru";

export type Messages = typeof es;

export const dictionaries: Record<Locale, Messages> = {
  es,
  en: en as unknown as Messages,
  pt: pt as unknown as Messages,
  ru: ru as unknown as Messages,
};
