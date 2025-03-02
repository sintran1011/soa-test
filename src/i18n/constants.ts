export type SiteConfig = {
  locales: string[];
  defaultLocale: string;
  localePrefix: "always" | "as-needed" | "never";
};

export const defaultConfig: SiteConfig = {
  locales: ["en", "vi"],
  defaultLocale: "en",
  localePrefix: "always",
};
