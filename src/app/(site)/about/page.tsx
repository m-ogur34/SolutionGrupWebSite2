import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Counter from "@/components/Home/Counter";
import Progresswork from "@/components/Home/WorkProgress";

export const metadata: Metadata = {
    title: "Hakkımızda | Ogur Luxury Solutions",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Ana Sayfa" },
    { href: "/about", text: "Hakkımızda" },
  ];
  return (
    <>
      {/* Sayfanın Üst Başlık Alanı */}
      <HeroSub
        title="Hakkımızda"
        description="Teknoloji ve hizmet sektörünü birleştirerek iş ortaklarımıza değer katan, sürdürülebilir ve yenilikçi çözümler üretiyoruz."
        breadcrumbLinks={breadcrumbLinks}
      />
      
      {/* İstatistikler (Ana sayfadaki verileri çeker) */}
       <Counter isColorMode={true} />
       
      {/* Çalışma Alanlarımız / Yeteneklerimiz */}
       <Progresswork isColorMode={true} />
    </>
  );
};

export default page;