import { getImgPath } from "@/utils/image";

export const menuItems = [
    { name: "Ana Sayfa", href: "#home" },
    { name: "Hakkımızda", href: "#about" },
    { name: "Hizmetler", href: "#services" },
    { name: "Projeler", href: "#portfolio" },
    { name: "Referanslar", href: "#testimonials" },
    { name: "Blog", href: "/#blog" },
];

export const count = [
    {
        icon: getImgPath("/images/counter/bag.svg"),
        value: "5",
        description: "Farklı Sektörde Profesyonel Hizmet",
    },
    {
        icon: getImgPath("/images/counter/admin.svg"),
        value: "7/24",
        description: "Kesintisiz Teknik Destek ve Müşteri Hizmetleri",
    },
    {
        icon: getImgPath("/images/counter/star.svg"),
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
        slug: 'dans-okulu',
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'Dans Okulu Otomasyonu',
        description: 'Öğrenci kayıtları, ders programları, eğitmen takibi ve ödeme süreçlerini tek bir panelden kolayca yönetin.',
        content: 'Dans okulları için özel olarak geliştirdiğimiz bu otomasyon sistemi sayesinde, öğrenci devamsızlık takibinden eğitmen maaş hesaplamalarına, sınıf programlarından ödeme hatırlatmalarına kadar tüm süreçleri dijitalleştirebilirsiniz. Kullanıcı dostu arayüzü ile karmaşık Excel dosyalarından kurtulun ve işinize odaklanın.'
    },
    {
        slug: 'muhasebe',
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'Muhasebe Yazılımı',
        description: 'Gelir-gider takibi, faturalandırma, cari hesap yönetimi ve finansal raporlama için güvenli bulut çözümü.',
        content: 'Küçük ve orta ölçekli işletmeler için tasarlanan bulut tabanlı muhasebe yazılımımız, finansal durumunuzu her an her yerden takip etmenizi sağlar. E-fatura entegrasyonu, otomatik banka mutabakatı ve detaylı nakit akışı raporları ile şirketinizin finansal sağlığını güvence altına alın.'
    },
    {
        slug: 'rent-a-car',
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        title: 'Rent a Car Otomasyonu',
        description: 'Araç rezervasyonları, filo takibi, bakım süreçleri ve müşteri sözleşmelerini dijital ortamda yönetin.',
        content: 'Araç kiralama sektörüne özel çözümlerimizle filonuzu verimli yönetin. Müsaitlik takvimi, bakım/kasko hatırlatmaları, müşteri kara liste kontrolü ve sözleşme yazdırma modülleri ile operasyonel yükünüzü azaltın ve müşteri memnuniyetini artırın.'
    },
    {
        slug: 'drone-temizlik',
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'Drone ile Cephe Temizliği',
        description: 'Yüksek katlı plazalar ve ulaşılması zor alanlar için iş güvenliği riskini sıfıra indiren teknolojik temizlik hizmeti.',
        content: 'Geleneksel yöntemlerin (iskele, vinç) yarattığı güvenlik risklerini ve yüksek maliyetleri ortadan kaldırıyoruz. Özel donanımlı temizlik dronlarımız ile yüksek katlı binaların, cam cephelerin ve ulaşılması güç alanların temizliğini hızlı, güvenli ve etkili bir şekilde gerçekleştiriyoruz.'
    },
    {
        slug: 'yalitim',
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'Bina Yalıtımı',
        description: 'Enerji tasarrufu sağlayan, uzun ömürlü ısı ve ses yalıtımı uygulamaları ile binalarınıza değer katın.',
        content: 'Enerji maliyetlerinin arttığı günümüzde, profesyonel yalıtım çözümleri ile tasarruf sağlayın. Isı, ses ve su yalıtımı konusunda uzman ekibimiz ve kaliteli malzeme kullanımımız ile binalarınızın ömrünü uzatıyor, yaşam konforunu artırıyoruz.'
    },
];

export const portfolioinfo = [
    {
        image: getImgPath('/images/portfolio/cozycasa.png'),
        alt: 'Dans Okulu',
        title: 'Dans Okulu Yönetimi',
        slug: 'dans-okulu-yonetimi',
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
        title: 'Araç Kiralama Sistemi',
        slug: 'rent-a-car-sistemi',
        info: 'Yazılım',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/roket-squred.png'),
        alt: 'Plaza Temizlik',
        title: 'Drone ile Temizlik',
        slug: 'drone-temizlik',
        info: 'Operasyon',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/panda-logo.png'),
        alt: 'Yalıtım',
        title: 'Bina Yalıtım Hizmeti',
        slug: 'bina-yalitim',
        info: 'Hizmet',
        Class: 'md:mt-0'
    },
];