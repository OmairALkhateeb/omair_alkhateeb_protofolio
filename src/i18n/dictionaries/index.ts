import en from "./en";
import ar from "./ar";
import de from "./de";
import type { Locale } from "../config";

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, ar, de };

export const getDictionary = (locale: Locale) => dictionaries[locale];

/** Replace {placeholders} in a dictionary string. */
export const fmt = (s: string, vars: Record<string, string | number>) =>
  s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
