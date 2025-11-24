import React from "react";
import { getAllPortfolios, getPortfolioBySlug } from "@/utils/markdown";
import markdownToHtml from "@/utils/markdownToHtml";
import BlogHeader from "@/components/Blog/BlogHeader";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getImgPath } from "@/utils/image";

// 1. Statik export için slug'ları oluşturuyoruz
export async function generateStaticParams() {
    const portfolios = getAllPortfolios(["slug"]);
    return portfolios.map((portfolio) => ({
        slug: portfolio.slug,
    }));
}

// 2. Sayfa bileşeni (Next.js 15 için async ve Promise yapısında)
export default async function PortfolioDetail({ params }: { params: Promise<{ slug: string }> }) {
    // Params'ı await ile çözümlüyoruz
    const { slug } = await params;

    const portfolio = getPortfolioBySlug(slug, [
        "title",
        "date",
        "slug",
        "author",
        "authorImage",
        "content",
        "coverImage",
        "category",
    ]);

    if (!portfolio.slug) {
        notFound();
    }

    const content = await markdownToHtml(portfolio.content || "");

    return (
        <>
            {/* BlogHeader params beklediği için slug'ı obje olarak gönderiyoruz */}
            <BlogHeader params={{ slug }} />
            <section className="pb-20 dark:bg-darkmode">
                <div className="container mx-auto max-w-4xl px-4">
                    {portfolio.coverImage && (
                        <div className="mb-10 w-full overflow-hidden rounded-lg">
                            <Image
                                src={getImgPath(portfolio.coverImage)}
                                alt={portfolio.title || "Portfolio Görseli"}
                                width={1000}
                                height={600}
                                className="w-full object-cover"
                            />
                        </div>
                    )}
                    {portfolio.category && (
                        <div className="mb-4">
                            <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                                {portfolio.category}
                            </span>
                        </div>
                    )}
                    <div
                        className="blog-details prose dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
            </section>
        </>
    );
}