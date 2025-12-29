import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Web",
  assetPrefix: "/Web/",
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
