// Dosya: src/components/SharedComponent/Blog/blogCard.tsx

import React from "react";
import Image from "next/image";
import { Blog } from "@/types/blog";
import { format } from "date-fns";
import { tr } from "date-fns/locale"; // Türkçe tarih formatı için
import Link from "next/link";

const BlogCard = ({ blog }: { blog: Blog }) => {
    const { title, coverImage, excerpt, date, slug } = blog;

    // Tarih formatını güvenli hale getirelim
    let formattedDate = "";
    try {
        formattedDate = format(new Date(date), "dd MMM yyyy", { locale: tr });
    } catch (e) {
        formattedDate = date; // Hata olursa ham tarihi göster
    }

    return (
        <div className="group mb-0 relative flex flex-col h-full">
            <div className="mb-6 overflow-hidden rounded-lg relative h-64 w-full">
                <Link href={`/blog/${slug}`} aria-label="blog cover" className="block h-full">
                    <Image
                        src={coverImage || "/images/blog/blog_1.png"} // Varsayılan resim eklendi
                        alt={title || "Blog görseli"}
                        className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                        width={408}
                        height={272}
                        quality={100}
                    />
                </Link>
                <div className="absolute top-4 left-4 bg-primary py-1.5 px-4 rounded-md shadow-md">
                    <span className="text-white font-medium text-xs uppercase tracking-wide">
                        Haber
                    </span>
                </div>
            </div>
            <div className="flex flex-col grow">
                <h3>
                    <Link
                        href={`/blog/${slug}`}
                        className="mb-3 inline-block text-xl font-bold text-midnight_text hover:text-primary dark:text-white dark:hover:text-primary transition-colors line-clamp-2"
                    >
                        {title}
                    </Link>
                </h3>
                <p className="text-base text-grey dark:text-white/60 mb-4 line-clamp-3">
                    {excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-border dark:border-dark_border">
                    <span className="text-sm font-medium text-grey dark:text-white/50 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        {formattedDate}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;