// Dosya: src/components/Layout/Header/Navigation/menuData.tsx

import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hakkımızda", href: "/about" },
    {
        label: "Hizmetlerimiz",
        href: "/services",
        submenu: [
            { label: "Web Sitesi Yapımı", href: "/services/web-tasarim" },
            { label: "Dans Okulu Yazılımı", href: "/services/dans-okulu" },
            { label: "Rent a Car Yazılımı", href: "/services/rent-a-car" },
            { label: "Drone ile Cephe Temizliği", href: "/services/drone-temizlik" },
            { label: "Bina Yalıtımı", href: "/services/yalitim" },
        ]
    },
    { label: "Referanslar", href: "/portfolio" },
    { label: "İletişim", href: "/contact" },
];