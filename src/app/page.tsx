// Dosya: src/app/page.tsx

import React from "react";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Counter from "@/components/Home/Counter";
import WorkProgress from "@/components/Home/WorkProgress";
import Testimonial from "@/components/SharedComponent/Testimonial";
import Contact from "@/components/Home/Contact";
import Blog from "@/components/SharedComponent/Blog";
import Portfolio from "@/components/SharedComponent/portfollio";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ana Sayfa | Ogur Luxury Solutions",
    description: "Modern yazılım çözümleri ve saha operasyonları.",
};

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Counter isColorMode={true} />
            <WorkProgress isColorMode={true} />
            <Portfolio />
            <Testimonial />
            <Blog />
            <Contact />
        </>
    );
}