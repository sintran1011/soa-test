/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outfit } from "next/font/google";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body className={`${outfit.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
