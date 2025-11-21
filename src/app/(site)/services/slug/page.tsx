import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Servicebox } from "@/app/api/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
    return Servicebox.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const service = Servicebox.find((item) => item.slug === params.slug);
    if (!service) {
        return {
            title: "Hizmet Bulunamadı",
        };
    }
    return {
        title: `${service.title} | Ogur Luxury Solutions`,
        description: service.description,
    };
}

const ServiceDetail = ({ params }: { params: { slug: string } }) => {
    const service = Servicebox.find((item) => item.slug === params.slug);

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
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        {/* Sol taraf: İkon ve Detay */}
                        <div className="w-full md:w-2/3">
                            <div className="mb-8">
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    width={80}
                                    height={80}
                                    className="mb-6 bg-primary/10 p-4 rounded-lg"
                                />
                                <h2 className="text-3xl font-bold text-midnight_text dark:text-white mb-6">
                                    Hizmet Detayları
                                </h2>
                                <p className="text-lg text-grey dark:text-white/70 leading-relaxed">
                                    {service.content}
                                </p>
                            </div>

                            {/* Örnek Özellikler Listesi (Genel) */}
                            <div className="bg-section dark:bg-darklight p-8 rounded-lg">
                                <h3 className="text-xl font-bold mb-4 text-midnight_text dark:text-white">Neler Sunuyoruz?</h3>
                                <ul className="list-disc pl-5 space-y-2 text-grey dark:text-white/70">
                                    <li>Profesyonel Danışmanlık ve Planlama</li>
                                    <li>Süreç Yönetimi ve Raporlama</li>
                                    <li>7/24 Teknik Destek</li>
                                    <li>İhtiyaca Özel Özelleştirilebilir Çözümler</li>
                                </ul>
                            </div>
                        </div>

                        {/* Sağ Taraf: CTA ve Diğer Hizmetler */}
                        <div className="w-full md:w-1/3 sticky top-32">
                            <div className="bg-white dark:bg-darklight border border-border dark:border-dark_border rounded-lg p-6 mb-8 shadow-lg">
                                <h3 className="text-xl font-bold mb-4 text-midnight_text dark:text-white">Hemen Başlayın</h3>
                                <p className="mb-6 text-sm text-grey dark:text-white/60">Projeniz için teklif almak ister misiniz?</p>
                                <Link href="/contact" className="block w-full py-3 px-6 bg-primary text-white text-center rounded-md hover:bg-blue-700 transition">
                                    Teklif İste
                                </Link>
                            </div>

                            <div className="bg-section dark:bg-darklight rounded-lg p-6">
                                <h3 className="text-lg font-bold mb-4 text-midnight_text dark:text-white">Diğer Hizmetlerimiz</h3>
                                <ul className="space-y-3">
                                    {Servicebox.filter(s => s.slug !== service.slug).map((item, index) => (
                                        <li key={index}>
                                            <Link href={`/services/${item.slug}`} className="flex items-center gap-3 text-grey dark:text-white/70 hover:text-primary dark:hover:text-primary transition">
                                                <span className="w-2 h-2 bg-primary rounded-full"></span>
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceDetail;