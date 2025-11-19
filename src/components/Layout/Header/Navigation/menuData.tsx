import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/about" },
  { 
    label: "Hizmetlerimiz", 
    href: "/services",
    submenu: [
        { label: "Dans Okulu Otomasyonu", href: "/services/dans-okulu" },
        { label: "Muhasebe Yazılımı", href: "/services/muhasebe" },
        { label: "Rent a Car Sistemi", href: "/services/rent-a-car" },
        { label: "Drone ile Temizlik", href: "/services/drone-temizlik" },
        { label: "Bina Yalıtımı", href: "/services/yalitim" },
    ]
  },
  { label: "Referanslar", href: "/portfolio" }, // Portfolio yerine Referanslar dedik
  { label: "İletişim", href: "/contact" },
];