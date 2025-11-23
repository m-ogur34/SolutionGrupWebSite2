/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  // GitHub Pages repository adınız buraya eklenmeli
  basePath: "/isiniCozelim",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    // Resim yolları için kullanılan değişkeni de güncelliyoruz
    NEXT_PUBLIC_BASE_PATH: "/isiniCozelim",
  },
};

export default nextConfig;