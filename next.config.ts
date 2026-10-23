import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.attackontitanapi.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
