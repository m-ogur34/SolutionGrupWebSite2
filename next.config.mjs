/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  // GitHub Pages repository adınız buraya eklenmeli
  basePath: "/solutiongrupwebsite2",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    // Resim yolları için kullanılan değişkeni de güncelliyoruz
    NEXT_PUBLIC_BASE_PATH: "/solutiongrupwebsite2",
  },
};

export default nextConfig;