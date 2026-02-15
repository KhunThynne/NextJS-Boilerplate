"use client";

import { ThemeProvider } from "@components/theme-provider";
import { Toaster } from "@components/ui/sonner";
import { DialogProvider } from "@/libs/dialog/DialogProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode, useState } from "react";

export default function Providers({
  children,
  locale,
  messages,
}: {
  children: ReactNode;
  locale: string;
  messages: Record<string, unknown>;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <QueryClientProvider client={queryClient}>
        <DialogProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Toaster />
            {children}
          </ThemeProvider>
        </DialogProvider>
      </QueryClientProvider>
    </NextIntlClientProvider>
  );
}
