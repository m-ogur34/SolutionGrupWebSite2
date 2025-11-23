import { getImgPath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
    return (
        <Link href="/" className="flex items-center">
            {/* Light Mod (Aydınlık) Logosu */}
            <Image
                src={getImgPath("/images/logo/isini-cozelim-logo.png")}
                alt="İşini Çözelim Logo"
                width={540} // Genişlik 3 katına çıkarıldı (180 x 3)
                height={180} // Yükseklik 3 katına çıkarıldı (60 x 3)
                className='dark:hidden w-auto h-36 object-contain' // h-12 (48px) yerine h-36 (144px) yapıldı
            />

            {/* Dark Mod (Karanlık) Logosu */}
            <Image
                src={getImgPath("/images/logo/isini-cozelim-logo-white.png")}
                alt="İşini Çözelim Logo"
                width={540} // Genişlik 3 katına çıkarıldı (180 x 3)
                height={180} // Yükseklik 3 katına çıkarıldı (60 x 3)
                className='dark:block hidden w-auto h-36 object-contain' // h-12 (48px) yerine h-36 (144px) yapıldı
            />
        </Link>
    );
};

export default Logo;