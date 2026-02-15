import { Metadata } from "next";
import "../styles/globals.css";
// import NotFoundRoot from "./(main)/[locale]/not-found";
import clsx from "clsx";

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
export default function GlobalNotFound() {
  return (
    <html key="not-found" lang={"en"}>
      <body
        className={clsx(`antialiased`)}
        key={"not-found"}
        suppressHydrationWarning
      >
        Not found
      </body>
    </html>
  );
}
