import { auth } from "@/auth";
import { redirect } from "@/libs/i18n/routing";

const Layout = async ({ children, params }: LayoutProps<"/[locale]/login">) => {
  const session = await auth();
  const { locale } = await params;
  if (session) {
    return redirect({ href: "/", locale });
  }
  return (
    <div className="flex flex-col  min-h-screen py-2 max-w-md mx-auto">
      {children}
    </div>
  );
};
export default Layout;
