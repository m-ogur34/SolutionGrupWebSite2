import React from "react";
import Portfolio from "@/components/portfolio/PortfolioList";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projelerimiz | Ogur Luxury Solutions",
};

const PortfolioList = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Ana Sayfa" },
        { href: "/portfolio", text: "Projeler" },
    ];
    return (
        <>
            <HeroSub
                title="Projelerimiz"
                description="Farklı sektörlerde başarıyla tamamladığımız ve devam eden seçkin projelerimize göz atın."
                breadcrumbLinks={breadcrumbLinks}
            />
            <Portfolio />
        </>
    );
};

export default PortfolioList;