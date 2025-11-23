import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import PortfolioList from "@/components/portfolio/PortfolioList";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Referanslar | Ogur Luxury Solutions",
    description: "Başarıyla tamamladığımız projeler ve referanslarımız.",
};

const PortfolioPage = () => {
    return (
        <>
            <HeroSub
                title="Referanslar"
                description="Geliştirdiğimiz yenilikçi çözümler ve mutlu müşterilerimiz."
                breadcrumbLinks={[
                    { href: "/", text: "Ana Sayfa" },
                    { href: "/portfolio", text: "Referanslar" }
                ]}
            />
            <PortfolioList />
        </>
    );
};

export default PortfolioPage;