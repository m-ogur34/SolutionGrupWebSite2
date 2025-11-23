import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import WorkProgress from "@/components/Home/WorkProgress"; // Hakkımızda içeriği burada
import Counter from "@/components/Home/Counter";
import Testimonial from "@/components/SharedComponent/Testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hakkımızda | Ogur Luxury Solutions",
    description: "Kurumsal çözümlerimiz ve ekibimiz hakkında bilgi alın.",
};

const AboutPage = () => {
    return (
        <>
            <HeroSub
                title="Hakkımızda"
                description="Teknoloji ve hizmeti birleştirerek işinize değer katıyoruz."
                breadcrumbLinks={[
                    { href: "/", text: "Ana Sayfa" },
                    { href: "/about", text: "Hakkımızda" }
                ]}
            />
            {/* WorkProgress componenti aslında bir 'Neden Biz' / Hakkımızda bölümüdür */}
            <WorkProgress isColorMode={true} />
            <Counter isColorMode={true} />
            <Testimonial />
        </>
    );
};

export default AboutPage;