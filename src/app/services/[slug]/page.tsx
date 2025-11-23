import React from "react";
import { Servicebox } from "@/app/api/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import HeroSub from "@/components/SharedComponent/HeroSub";

// Statik export için (GitHub Pages kullanıyorsanız gereklidir)
export async function generateStaticParams() {
    return Servicebox.map((service) => ({
        slug: service.slug,
    }));
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
    const service = Servicebox.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    return (
        <>
            <HeroSub
                title={service.title}
                description={service.description}
                breadcrumbLinks={[
                    { href: "/", text: "Ana Sayfa" },
                    { href: "/services", text: "Hizmetlerimiz" },
                    { href: `/services/${service.slug}`, text: service.title }
                ]}
            />
            <section className="py-20 dark:bg-darkmode">
                <div className="container mx-auto max-w-4xl px-4">
                    <div className="flex flex-col items-center mb-10">
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                            <Image
                                src={service.icon}
                                alt={service.title}
                                width={48}
                                height={48}
                                className="w-12 h-12"
                            />
                        </div>
                        <h2 className="text-3xl font-bold text-midnight_text dark:text-white text-center">
                            {service.title}
                        </h2>
                    </div>

                    <div className="prose dark:prose-invert max-w-none text-lg text-grey dark:text-white/70">
                        <p>{service.content}</p>
                        {/* Buraya daha fazla detay veya form eklenebilir */}
                    </div>
                </div>
            </section>
        </>
    );
}