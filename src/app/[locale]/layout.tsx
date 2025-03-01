/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outfit } from "next/font/google";

import { routing } from "@/i18n/routing";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "SOA Test",
  description: "Test for FE dev",
  // icons: {
  //   icon: "/favicon.ico",
  // },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body className={`${outfit.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
            {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
