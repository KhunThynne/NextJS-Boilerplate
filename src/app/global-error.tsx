"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type { Metadata } from "next";

// Error boundaries must be Client Components
export const metadata: Metadata = {
  title: "NextJs Boilerplate - Error",
  description: "This is a static description for all locales",
};

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html key="global-error">
      <body className="flex min-h-screen flex-col place-content-center bg-secondary">
        <Card>
          <CardHeader>
            <h2>Something went wrong! </h2>
          </CardHeader>
          <CardContent>
            {error?.message && <p style={{ color: "red" }}>{error.message}</p>}
            {error?.digest && (
              <small style={{ opacity: 0.6 }}>Error ID: {error.digest}</small>
            )}
          </CardContent>
          <CardFooter className="justify-end">
            <Button variant={"outline"} onClick={() => reset()}>
              Try again
            </Button>
          </CardFooter>
        </Card>
      </body>
    </html>
  );
}
