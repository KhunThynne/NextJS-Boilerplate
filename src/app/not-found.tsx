import { getLocale } from "next-intl/server";
import getRequestConfig from "@/libs/i18n/request";
import { createTranslator } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Not found",
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
export default async function NotFoundRoot() {
  if (typeof window !== "undefined") {
    return null;
  }
  const locale = await getLocale();
  const { messages } = await getRequestConfig({
    requestLocale: Promise.resolve(locale),
  });
  if (!messages) {
    throw new Error("Translation messages not found");
  }
  const t = createTranslator({ locale, messages });
  return (
    <html key="global-not-found" lang={locale}>
      <body
        className={clsx(`antialiased`)}
        key={"global-not-found"}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
        >
          <div className="relative h-screen place-content-center place-items-center  text-center">
            <div className="">
              <h1 className="mb-4 text-6xl font-extrabold text-foreground dark:text-white">
                {404}
              </h1>
              <div className="mb-6 max-w-md text-lg text-muted-foreground">
                {t("not_found.description")}
              </div>
              <Link href="/">
                <Button variant="default">Home</Button>
              </Link>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
