import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Web",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
