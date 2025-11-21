import HeroSub from "@/components/SharedComponent/HeroSub";
import NotFound from "@/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sayfa Bulunamadı | Ogur Luxury Solutions",
};

const ErrorPage = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Ana Sayfa" },
        { href: "/404", text: "404" },
    ];
    return (
        <>
            <HeroSub
                title="404"
                description="Aradığınız sayfayı bulamadık."
                breadcrumbLinks={breadcrumbLinks}
            />
            <NotFound />
        </>
    );
};

export default ErrorPage;