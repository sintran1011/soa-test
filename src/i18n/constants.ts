export type SiteConfig = {
  locales: string[];
  defaultLocale: string;
  localePrefix: "always" | "as-needed" | "never";
};

export const defaultConfig: SiteConfig = {
  locales: ["en", "fr"],
  defaultLocale: "en",
  localePrefix: "always",
};
