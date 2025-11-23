import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import Services from "@/components/Home/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hizmetlerimiz | Ogur Luxury Solutions",
    description: "Web tasarım, yazılım ve saha operasyon hizmetlerimiz.",
};

const ServicesPage = () => {
    return (
        <>
            <HeroSub
                title="Hizmetlerimiz"
                description="İşletmeniz için sunduğumuz profesyonel dijital ve fiziksel çözümler."
                breadcrumbLinks={[
                    { href: "/", text: "Ana Sayfa" },
                    { href: "/services", text: "Hizmetlerimiz" }
                ]}
            />
            <Services />
        </>
    );
};

export default ServicesPage;