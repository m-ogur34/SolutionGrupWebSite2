import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
    { label: "Ana Sayfa", href: "/" }, // Anasayfa kök dizine gitmeli
    { label: "Hakkımızda", href: "/about" },
    {
        label: "Hizmetlerimiz",
        href: "/services", // Hizmetler sayfası
        submenu: [
            { label: "Web Tasarım & Yazılım", href: "/services/web-tasarim" },
            { label: "Dans Okulu Yazılımı", href: "/services/dans-okulu" },
            { label: "Rent a Car Otomasyonu", href: "/services/rent-a-car" },
            { label: "Drone ile Cephe Temizliği", href: "/services/drone-temizlik" },
            { label: "Bina Yalıtımı", href: "/services/yalitim" },
        ]
    },
    { label: "Referanslar", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "İletişim", href: "/contact" },
];