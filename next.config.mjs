/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  // GitHub Pages repository adınız buraya eklenmeli
  basePath: "/İsniCozelim",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    // Resim yolları için kullanılan değişkeni de güncelliyoruz
    NEXT_PUBLIC_BASE_PATH: "/İsniCozelim",
  },
};

export default nextConfig;