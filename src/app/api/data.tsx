import { getImgPath } from "@/utils/image";

export const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "/#blog" },
];

export const count = [
    {
        icon: getImgPath("/images/counter/bag.svg"), // Çanta ikonu
        value: "5",
        description: "Farklı Sektörde Profesyonel Hizmet",
    },
    {
        icon: getImgPath("/images/counter/admin.svg"), // İnsan ikonu
        value: "7/24",
        description: "Kesintisiz Teknik Destek ve Müşteri Hizmetleri",
    },
    {
        icon: getImgPath("/images/counter/star.svg"), // Yıldız ikonu
        value: "%100",
        description: "Müşteri Memnuniyeti ve Kalite Odaklı Çözümler",
    },
];

export const Progress = [
    { title: 'Yazılım ve Otomasyon Çözümleri', Progress: 100 },
    { title: 'Saha Operasyon ve Temizlik', Progress: 95 },
    { title: 'Danışmanlık ve Yönetim', Progress: 90 }
];

export const Servicebox = [
    {
        icon: getImgPath('/images/services/ux-design-product_1.svg'), // İleride dans ikonu ile değiştirin
        title: 'Dans Okulu Otomasyonu',
        description: 'Öğrenci kayıtları, ders programları, eğitmen takibi ve ödeme süreçlerini tek bir panelden kolayca yönetin.',
    },
    {
        icon: getImgPath('/images/services/perfomance-optimization.svg'), // İleride muhasebe ikonu ile değiştirin
        title: 'Muhasebe Yazılımı',
        description: 'Gelir-gider takibi, faturalandırma, cari hesap yönetimi ve finansal raporlama için güvenli bulut çözümü.',
    },
    {
        icon: getImgPath('/images/services/ux-design-product_2.svg'), // İleride araba ikonu ile değiştirin
        title: 'Rent a Car Otomasyonu',
        description: 'Araç rezervasyonları, filo takibi, bakım süreçleri ve müşteri sözleşmelerini dijital ortamda yönetin.',
    },
    {
        icon: getImgPath('/images/services/ux-design-product_1.svg'), // İleride drone ikonu ile değiştirin
        title: 'Drone ile Cephe Temizliği',
        description: 'Yüksek katlı plazalar ve ulaşılması zor alanlar için iş güvenliği riskini sıfıra indiren teknolojik temizlik hizmeti.',
    },
    {
        icon: getImgPath('/images/services/perfomance-optimization.svg'), // İleride bina/yalıtım ikonu ile değiştirin
        title: 'Bina Yalıtımı',
        description: 'Enerji tasarrufu sağlayan, uzun ömürlü ısı ve ses yalıtımı uygulamaları ile binalarınıza değer katın.',
    },
]

export const portfolioinfo = [
    {
        image: getImgPath('/images/portfolio/cozycasa.png'), // Geçici görsel
        alt: 'Dans Okulu',
        title: 'Dans Okulu Yönetimi',
        slug: 'dans-okulu-yonetimi',
        info: 'Otomasyon',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/mars.png'), // Geçici görsel
        alt: 'Muhasebe',
        title: 'Bulut Muhasebe',
        slug: 'bulut-muhasebe',
        info: 'Finans',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/humans.png'), // Geçici görsel
        alt: 'Rent a Car',
        title: 'Araç Kiralama Sistemi',
        slug: 'rent-a-car-sistemi',
        info: 'Yazılım',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/roket-squred.png'), // Geçici görsel
        alt: 'Plaza Temizlik',
        title: 'Drone ile Temizlik',
        slug: 'drone-temizlik',
        info: 'Operasyon',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/panda-logo.png'), // Geçici görsel
        alt: 'Yalıtım',
        title: 'Bina Yalıtım Hizmeti',
        slug: 'bina-yalitim',
        info: 'Hizmet',
        Class: 'md:mt-0'
    },
]