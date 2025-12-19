"use client";
// import { useAppForm } from "@/components/createAppForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const router = useRouter();
  // const form = useAppForm({
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  //   onSubmit: async (data) => {
  //     await signIn("credentials", {
  //       ...data.value,
  //       redirectTo: callbackUrl,
  //     })
  //       .then((result) => {
  //         if (result instanceof Error) {
  //           toast.error(result.message);
  //           return;
  //         }
  //         throw result;
  //       })
  //       .catch((error) => {
  //         if (isRedirectError(error)) {
  //           toast.success("Login successful");
  //           return;
  //         }
  //         toast.error("Something went wrong");
  //       });
  //   },
  // });
  return (
    <Dialog open modal>
      <DialogContent className="w-md" showCloseButton={false}>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            // await form.handleSubmit();
          }}
        >
          <DialogHeader>
            <DialogTitle>Login</DialogTitle>
            <DialogDescription>
              Enter your email and password to sign in to your account.
            </DialogDescription>
          </DialogHeader>
          {/* <form.AppField name="email">
            {(field) => {
              return (
                <field.Input
                  label="Email"
                  description="Enter your registered email address."
                  placeholder="name@example.com"
                />
              );
            }}
          </form.AppField>
          <form.AppField name="password">
            {(field) => {
              return (
                <field.Input
                  label="Password"
                  description="Enter your password to sign in."
                  type="password"
                />
              );
            }}
          </form.AppField> */}
          <DialogFooter>
            {/* <form.AppForm>
              <Button type="submit">Login</Button>
            </form.AppForm> */}
            <Button type="submit">Login</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
