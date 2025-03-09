/* eslint-disable @typescript-eslint/no-explicit-any */
import { Poppins } from "next/font/google";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/layouts/Header";
import "@/app/global.css";
import LenisLayout from "@/layouts/LenisLayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
  style: ["normal"],
});
export const metadata: Metadata = {
  title: "SOA Test",
  description: "Test for FE dev",
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
      <body className={`${poppins.className} antialiased`}>
        <LenisLayout>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
          </NextIntlClientProvider>
        </LenisLayout>
      </body>
    </html>
  );
}
