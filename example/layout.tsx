import { auth } from "@/auth";
import { redirect } from "@/libs/i18n/routing";
import { headers } from "next/headers";
async function getHeadersList() {
  const headersList = await headers();
  const fullUrl = headersList.get("x-url") || "";
  return fullUrl;
  // return new Promise((resolve) =>
  //   setTimeout(() => {
  //     resolve(fullUrl);
  //   }, 50)
  // );
}
export default async function AuthenticationLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const fullUrl = await getHeadersList();
  const session = await auth();
  const { locale } = await params;
  if (!session) redirect({ href: `/login/?callbackUrl=${fullUrl}`, locale });
  return children;
}
