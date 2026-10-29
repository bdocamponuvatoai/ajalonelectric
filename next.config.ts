import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Keeps `/about/` → `about/index.html`, matching the original URLs.
  trailingSlash: true,
  images: {
    // Static export has no optimizer. The loader maps the two widths below to
    // the pre-sized photo variants committed in src/assets/images.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: [720, 1536],
    imageSizes: [],
  },
};

export default nextConfig;
