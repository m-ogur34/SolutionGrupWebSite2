import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Servicebox } from "@/app/api/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

// Dinamik parametre tipi
type Props = {
    params: { slug: string };
};

// Static Params Üretimi (Build zamanı için)
export async function generateStaticParams() {
    return Servicebox.map((service) => ({
        slug: service.slug,
    }));
}

// Metadata Üretimi
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // Next.js 15'te params asenkron olabilir, await ekliyoruz (Gerekirse)
    const { slug } = params;
    const service = Servicebox.find((item) => item.slug === slug);

    if (!service) {
        return { title: "Hizmet Bulunamadı" };
    }
    return {
        title: `${service.title} | Ogur Luxury Solutions`,
        description: service.description,
    };
}

const ServiceDetail = async ({ params }: Props) => {
    const { slug } = params;
    const service = Servicebox.find((item) => item.slug === slug);

    if (!service) {
        notFound();
    }

    const breadcrumbLinks = [
        { href: "/", text: "Ana Sayfa" },
        { href: "/services", text: "Hizmetler" },
        { href: `/services/${service.slug}`, text: service.title },
    ];

    return (
        <>
            <HeroSub
                title={service.title}
                description={service.description}
                breadcrumbLinks={breadcrumbLinks}
            />

            <section className="py-20 dark:bg-darkmode">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        {/* Sol İçerik */}
                        <div className="w-full lg:w-2/3">
                            <div className="bg-white dark:bg-darklight p-8 rounded-2xl shadow-sm border border-border dark:border-dark_border">
                                <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <Image
                                        src={service.icon}
                                        alt={service.title}
                                        width={40}
                                        height={40}
                                        className="dark:invert"
                                    />
                                </div>
                                <h2 className="text-3xl font-bold text-midnight_text dark:text-white mb-6">
                                    {service.title} Hakkında
                                </h2>
                                <p className="text-lg text-grey dark:text-white/70 leading-relaxed mb-8">
                                    {service.content}
                                </p>

                                <div className="bg-section dark:bg-darkmode p-6 rounded-xl">
                                    <h4 className="text-xl font-bold mb-4 dark:text-white">Avantajlar</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-grey dark:text-white/70">
                                        <li>Sektörel deneyim ve uzman kadro</li>
                                        <li>Yenilikçi teknoloji kullanımı</li>
                                        <li>Maliyet ve zaman tasarrufu</li>
                                        <li>7/24 Destek hizmeti</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Sağ Sidebar */}
                        <div className="w-full lg:w-1/3 sticky top-32 space-y-8">
                            {/* Diğer Hizmetler Widget */}
                            <div className="bg-white dark:bg-darklight p-6 rounded-xl border border-border dark:border-dark_border shadow-sm">
                                <h3 className="text-xl font-bold mb-6 text-midnight_text dark:text-white border-b border-border dark:border-dark_border pb-4">
                                    Diğer Hizmetler
                                </h3>
                                <ul className="space-y-2">
                                    {Servicebox.filter(s => s.slug !== service.slug).map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={`/services/${item.slug}`}
                                                className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/5 group transition-colors"
                                            >
                                                <span className="text-grey dark:text-white/70 group-hover:text-primary transition-colors font-medium">
                                                    {item.title}
                                                </span>
                                                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* İletişim Widget */}
                            <div className="bg-primary p-8 rounded-xl text-white text-center">
                                <h3 className="text-2xl font-bold mb-4">Projeniz mi var?</h3>
                                <p className="mb-6 opacity-90">
                                    Hemen bizimle iletişime geçin, size özel çözümler üretelim.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-block w-full py-3 px-6 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    Teklif Alın
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceDetail;