import { getImgPath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center">
      {/* Light Mod (Aydınlık) Logosu */}
      <Image
        src={getImgPath("/images/logo/luxury-solutions-logo.png")} // Kendi dosya adınız
        alt="Solution Grup Logo"
        width={500} // Genişliği artırdık (160 -> 250)
        height={160}  // Yüksekliği artırdık
        // w-auto ve h-12 (48px yükseklik) vererek orantılı büyümesini sağlıyoruz
        className='dark:hidden w-auto h-12 object-contain' 
      />
      
      {/* Dark Mod (Karanlık) Logosu - Aynısını veya beyaz versiyonunu kullanın */}
      <Image
        src={getImgPath("/images/logo/luxury-solutions-logo.png")} 
        alt="Solution Grup Logo"
        width={500}
        height={160}
        className='dark:block hidden w-auto h-12 object-contain'
      />
    </Link>
  );
};

export default Logo;