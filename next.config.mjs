/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  // basePath ve assetPrefix satırlarını kaldırdık
  // basePath: ... (SİLİNDİ)
  // assetPrefix: ... (SİLİNDİ)
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    // Base path'i boş bırakıyoruz
    NEXT_PUBLIC_BASE_PATH: "",
  },
};

export default nextConfig;