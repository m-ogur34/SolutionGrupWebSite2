// Dosya: src/app/blog/page.tsx

import React from "react";
import BlogList from "@/components/Blog/BlogList";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Ogur Luxury Solutions",
};

const BlogPage = () => {
    return (
        <>
            <HeroSub
                title="Blog & Haberler"
                description="Teknoloji ve sektörden güncel haberler."
                breadcrumbLinks={[
                    { href: "/", text: "Ana Sayfa" },
                    { href: "/blog", text: "Blog" }
                ]}
            />
            <BlogList />
        </>
    );
};

export default BlogPage;