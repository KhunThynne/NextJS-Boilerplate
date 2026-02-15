import { getLocale } from "next-intl/server";
import { createTranslator } from "next-intl";
import Link from "next/link";
import { Button } from "@components/ui/button";
import getRequestConfig from "@/libs/i18n/request";

export default async function NotFoundRoot() {
  const locale = (await getLocale()) || "en";
  const { messages } = await getRequestConfig({
    requestLocale: Promise.resolve(locale),
  });
  if (!messages) {
    throw new Error("Translation messages not found");
  }
  const t = createTranslator({ locale, messages });
  return (
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
  );
}
