import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import DiscordProvider from "next-auth/providers/discord";

import type { JWT } from "next-auth/jwt";
import { env } from "@/env";

// import { env } from "@/env";
// import type { DiscordUser } from "@type/user.type";
// import { executeAuth } from "../graphql/execute";
// import getBaseUrl from "@/utils/getBaseUrl";

// declare module "next-auth" {
//   interface Session {
//     user: GqlUser;
//   }

//   interface User extends GqlUser {
//     sessionToken?: string;
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT extends GqlUser {
//     sessionToken?: string;
//   }
// }

export const { auth, handlers, signIn, signOut } = NextAuth({
  secret: [env.AUTH_SECRET],
  basePath: "/api/auth",
  providers: [
    DiscordProvider({
      // clientId: env.AUTH_DISCORD_CLIENT_ID,
      // clientSecret: env.AUTH_DISCORD_CLIENT_SECRET,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials.email === env.AUTH_USER &&
          credentials.password === env.AUTH_PASSWORD
        ) {
          return {
            id: new Date().toString(),
            email: env.AUTH_USER,
            name: env.AUTH_USER,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!account?.provider) return false;
      console.log("🔐 SignIn via provider:", account.provider);

      switch (account.provider) {
        case "credentials":
          return true;
        case "discord": {
          // const discordUser = profile as unknown as DiscordUser;
          // try {
          //   if (!account.access_token || !profile?.email) return false;
          //   const authResult = await AuthenticateAndLinkProvider({
          //     accessToken: account.access_token,
          //     email: profile.email,
          //     name: discordUser.username,
          //     provider: account.provider,
          //     providerAccountId: account.providerAccountId,
          //     refreshToken: account.refresh_token,
          //     image: discordUser.image_url,
          //   });
          //   if (authResult) {
          //     return true;
          //   }
          //   throw new Error("Discord auth fail");
          // } catch (err) {
          //   console.error("❌ Error during Discord RegisterAndLogin", err);
          //   return false;
          // }
          return true;
        }

        case "google":
          console.log("🔵 Google login:", profile);
          return true;

        case "github":
          console.log("⚫ GitHub login:", profile);
          return true;

        default:
          console.warn("⚠️ Unknown provider:", account.provider);
          return false;
      }
    },
    async jwt({ token, user }): Promise<JWT> {
      if (user) {
        Object.assign(token, {
          ...user,
        });
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        const {
          sessionToken,
          accessToken,
          refetchToken,
          passwordResetIssuedAt,
          passwordResetRedeemedAt,
          ...rest
        } = token;
        session.user = {
          ...session.user,
          ...rest,
          email: token.email ?? "",
        };
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // // Allows relative callback URLs
      // baseUrl = env.NEXT_PUBLIC_SITE_URL;
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
});
