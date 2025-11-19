import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/OfficeLocation";
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "İletişim | Ogur Luxury Solutions",
};

const ContactPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Ana Sayfa" },
    { href: "/contact", text: "İletişim" },
  ];
  return (
    <>
      <HeroSub
        title="Bize Ulaşın"
        description="Projeleriniz için profesyonel destek almak veya hizmetlerimiz hakkında detaylı bilgi edinmek için bizimle iletişime geçin."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactInfo />
      <ContactForm />
      <Location />
    </>
  );
};

export default ContactPage;