// Dosya: src/components/NotFound/index.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getImgPath } from "@/utils/image";

const NotFound = () => {
  return (
      <section className="bg-white pt-20 pb-20 dark:bg-darkmode">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative w-full max-w-md mb-10">
              <Image
                  src={getImgPath("/images/svgs/404.svg")}
                  alt="404 Bulunamadı"
                  width={400}
                  height={400}
                  className="mx-auto"
              />
            </div>

            <h3 className="mb-5 text-2xl font-semibold text-dark dark:text-white">
              Aradığınız Sayfaya Ulaşılamıyor.
            </h3>
            <p className="mb-8 text-base text-body-color dark:text-dark-6">
              Üzgünüz! Aradığınız sayfa mevcut değil. Taşınmış, silinmiş veya adresi değişmiş olabilir.
            </p>
            <Link
                href="/"
                className="rounded-md px-7 py-3 text-base font-medium text-white transition hover:bg-blue-700 bg-primary"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </section>
  );
};

export default NotFound;