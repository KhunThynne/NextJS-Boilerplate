import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import withPWAInit from "@ducanh2912/next-pwa";

const withNextIntl = createNextIntlPlugin("./src/libs/i18n/request.ts");

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
});

const nextConfig = {
  /**
   * @type {import('next').NextConfig}
   */
  turbopack: {
    // options
  },
  skipProxyUrlNormalize: true,
  reactCompiler: true,
  cacheComponents: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
    mcpServer: true,
    authInterrupts: true,
  },
  // trailingSlash:true,
  typedRoutes: false,
  basePath: "",
  // assetPrefix: env.NEXT_PUBLIC_SITE_URL,
  // experimental: {
  //   serverActions: {
  //     allowedOrigins: ["shop.xd-tect.com"],
  //   },
  // },
  async rewrites() {
    return [
      // {
      //   source: "/socket.io",
      //   destination: `${env.NEXT_PUBLIC_API_URL}/socket.io/`,
      // },
    ];
  },
  images: {
    dangerouslyAllowSVG: true,
    dangerouslyAllowLocalIP: true,
    remotePatterns: [],
  },
  env: {},
} satisfies NextConfig;

export default withPWA(withNextIntl(nextConfig));
