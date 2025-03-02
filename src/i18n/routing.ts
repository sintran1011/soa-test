import { defineRouting } from "next-intl/routing";
import { defaultConfig } from "./constants";

export function getRoutingConfig() {
  return defineRouting({
    localePrefix: defaultConfig.localePrefix,
    locales: defaultConfig.locales,
    defaultLocale: defaultConfig.defaultLocale,
  });
}

export const initConfig = getRoutingConfig();

