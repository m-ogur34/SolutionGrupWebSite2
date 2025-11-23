// Dosya: src/app/contact/page.tsx

import React from "react";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactForm from "@/components/Contact/Form";
import OfficeLocation from "@/components/Contact/OfficeLocation";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "İletişim | Ogur Luxury Solutions",
};

const ContactPage = () => {
    return (
        <>
            <HeroSub
                title="İletişim"
                description="Projeleriniz için bizimle iletişime geçin."
                breadcrumbLinks={[
                    { href: "/", text: "Ana Sayfa" },
                    { href: "/contact", text: "İletişim" }
                ]}
            />
            <ContactInfo />
            <ContactForm />
            <OfficeLocation />
        </>
    );
};

export default ContactPage;