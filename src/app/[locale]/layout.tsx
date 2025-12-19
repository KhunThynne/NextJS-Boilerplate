import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Providers from "../providers";
import { getMessages } from "next-intl/server";
import { auth } from "@/auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Starter",
  description: "Next.js Boilerplate with Shadcn, i18n, and more",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Next.js Starter",
  },
  formatDetection: {
    telephone: false,
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  const session = await auth();
  return (
    <html lang={locale}>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers
          locale={locale}
          messages={messages}
          key={session?.user?.id ?? "unauthenticated"}
        >
          {children}
        </Providers>
      </body>
    </html>
  );
}
