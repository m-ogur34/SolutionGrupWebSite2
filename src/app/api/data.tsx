import { getImgPath } from "@/utils/image";

export const menuItems = [
    { name: "Ana Sayfa", href: "/" }, // #home yerine / yapıldı
    { name: "Hakkımızda", href: "/about" },
    { name: "Hizmetler", href: "/services" },
    { name: "Projeler", href: "/portfolio" },
    { name: "İletişim", href: "/contact" },
];

export const count = [
    {
        icon: getImgPath("/images/counter/bag.svg"),
        value: "5+",
        description: "Farklı Sektörde Profesyonel Hizmet",
    },
    {
        icon: getImgPath("/images/counter/admin.svg"),
        value: "7/24",
        description: "Kesintisiz Teknik Destek",
    },
    {
        icon: getImgPath("/images/counter/star.svg"),
        value: "%100",
        description: "Müşteri Memnuniyeti",
    },
];

export const Progress = [
    { title: 'Yazılım ve Otomasyon', Progress: 100 },
    { title: 'Saha Operasyonları', Progress: 95 },
    { title: 'Danışmanlık', Progress: 90 }
];

// Hizmetler - Slug'lar menü ile uyumlu hale getirildi
export const Servicebox = [
    {
        slug: 'web-tasarim', // Menüdeki link ile eşleşti
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'Web Tasarım & Yazılım',
        description: 'Kurumsal kimliğinizi yansıtan, SEO uyumlu ve mobil dostu modern web siteleri.',
        content: 'İşletmeniz için özel olarak tasarlanmış, hızlı, güvenli ve yönetim panelli web siteleri geliştiriyoruz. E-ticaret, kurumsal tanıtım veya özel web uygulamaları ile dijital varlığınızı güçlendirin.'
    },
    {
        slug: 'dans-okulu',
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        title: 'Dans Okulu Otomasyonu',
        description: 'Öğrenci kayıt, ders programı ve ödeme takibi için kapsamlı yönetim sistemi.',
        content: 'Dans okulları için özel geliştirdiğimiz yazılım ile devamsızlık takibi, eğitmen maaş hesaplaması ve sınıf yönetimini tek panelden yapın.'
    },
    {
        slug: 'rent-a-car',
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'Rent a Car Otomasyonu',
        description: 'Araç kiralama süreçlerinizi, rezervasyonları ve filo bakımını dijitalleştirin.',
        content: 'Araç müsaitlik durumu, kasko takibi, müşteri kara liste kontrolü ve sözleşme yönetimi ile filonuzu verimli yönetin.'
    },
    {
        slug: 'drone-temizlik',
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'Drone ile Cephe Temizliği',
        description: 'Yüksek katlı binalar için iş güvenliği riskini sıfıra indiren teknolojik temizlik.',
        content: 'Plazalar ve gökdelenler için iskele gerektirmeyen, hızlı ve güvenli drone destekli dış cephe temizlik hizmeti sunuyoruz.'
    },
    {
        slug: 'yalitim',
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'Bina Yalıtımı',
        description: 'Enerji tasarrufu sağlayan profesyonel ısı ve ses yalıtımı uygulamaları.',
        content: 'Binalarınızın enerji verimliliğini artıran, uzun ömürlü mantolama ve izolasyon çözümleri.'
    },
];

export const portfolioinfo = [
    {
        image: getImgPath('/images/portfolio/cozycasa.png'),
        alt: 'Dans Okulu',
        title: 'Dans Yönetim Sistemi',
        slug: 'dans-yonetim',
        info: 'Otomasyon',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/mars.png'),
        alt: 'Muhasebe',
        title: 'Bulut Muhasebe',
        slug: 'bulut-muhasebe',
        info: 'Finans',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/humans.png'),
        alt: 'Rent a Car',
        title: 'Filo Kiralama',
        slug: 'filo-kiralama',
        info: 'Yazılım',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/roket-squred.png'),
        alt: 'Temizlik',
        title: 'SkyClean Drone',
        slug: 'skyclean-drone',
        info: 'Operasyon',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/panda-logo.png'),
        alt: 'Yalıtım',
        title: 'Eco İzolatör',
        slug: 'eco-izolator',
        info: 'İnşaat',
        Class: 'md:mt-0'
    },
];