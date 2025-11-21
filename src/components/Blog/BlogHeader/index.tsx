// Dosya: src/components/Blog/BlogHeader/index.tsx

import { getAllPosts, getPostBySlug } from "@/utils/markdown";
import markdownToHtml from "@/utils/markdownToHtml";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import Image from "next/image";

type Props = {
    params: { slug: string };
};

export default async function BlogHead({ params }: Props) {
    // params.slug'ı doğrudan kullanın, getAllPosts çağırmaya gerek yok.
    const post = getPostBySlug(params.slug, [
        "title",
        "author",
        "authorImage",
        "content",
        "coverImage",
        "date",
    ]);

    // Post bulunamazsa hata vermemesi için kontrol
    if (!post.title) {
        return <div className="pt-44 text-center">Yazı bulunamadı.</div>;
    }

    return (
        <>
            <section className="pt-44 pb-10 dark:bg-darkmode">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-8">
                        <div className="col-span-12 md:col-span-8">
                            <div className="flex flex-wrap items-center gap-6 mb-6">
                                <span className="text-base text-midnight_text dark:text-white/70 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                    {format(new Date(post.date), "dd MMMM yyyy", { locale: tr })}
                                </span>
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                <span className="text-base text-midnight_text dark:text-white/70">
                                    Blog
                                </span>
                            </div>
                            <h1 className="text-midnight_text dark:text-white text-3xl md:text-5xl leading-tight font-bold mb-0">
                                {post.title}
                            </h1>
                        </div>
                        <div className="col-span-12 md:col-span-4 md:flex md:justify-end">
                            <div className="flex items-center gap-4 bg-white dark:bg-darklight p-4 rounded-xl shadow-sm border border-border dark:border-dark_border w-fit">
                                <Image
                                    src={post.authorImage || "/images/blogdetail-page/silicaman.png"}
                                    alt="Yazar"
                                    className="rounded-full object-cover"
                                    width={60}
                                    height={60}
                                />
                                <div>
                                    <span className="text-lg font-bold text-midnight_text dark:text-white block">
                                        {post.author || "Admin"}
                                    </span>
                                    <p className="text-sm text-grey dark:text-white/50">Yazar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}