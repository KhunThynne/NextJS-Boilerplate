import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">{t("title")}</h1>
        <p className="mt-3 text-2xl">{t("description")}</p>
        <div className="mt-6">
          <Button>Click me (Shadcn UI)</Button>
        </div>
      </main>
    </div>
  );
}
