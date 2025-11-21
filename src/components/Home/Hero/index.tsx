// Dosya: src/components/Home/Hero/index.tsx

'use client'
import { getImgPath } from '@/utils/image'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className='relative md:pt-44 pt-28 bg-white dark:bg-darklight bg-cover text-white' id="home">
            <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-4 relative z-10'>
                <div
                    className='md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center'
                    data-aos='fade-right'
                    data-aos-delay='200'
                    data-aos-duration='1000'>
                    <div className='flex gap-2 items-center'>
                        <span className='w-3 h-3 rounded-full bg-success'></span>
                        <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              Teknoloji ve Hizmetin Buluşma Noktası
            </span>
                    </div>
                    <h1 className='text-midnight_text font-bold dark:text-white text-4xl md:text-5xl md:leading-[1.15]'>
                        Ogur Luxury Solutions <br />
                        <span className="text-primary">İşinize Değer Katar.</span>
                    </h1>
                    <p className='text-grey dark:text-white/70 text-lg font-normal mb-6 leading-relaxed'>
                        Modern yazılım çözümlerinden (Web, Dans Okulu, Rent a Car) ileri teknoloji saha operasyonlarına (Drone Temizlik, Yalıtım) kadar işletmeniz için uçtan uca çözümler sunuyoruz.
                    </p>

                    <div className="flex gap-4 mt-8">
                        <Link
                            href='#services'
                            className='py-3 px-8 bg-primary text-white rounded-md hover:bg-blue-700 transition duration-300 font-medium'>
                            Hizmetleri İncele
                        </Link>
                        <Link
                            href='/contact'
                            className='py-3 px-8 bg-transparent border border-primary text-primary dark:text-white dark:border-white rounded-md hover:bg-primary hover:text-white transition duration-300 font-medium'>
                            Bize Ulaşın
                        </Link>
                    </div>
                </div>

                <div className="md:col-span-6 col-span-12 relative flex items-center justify-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-full h-full -z-10 bg-[url('/images/hero/line-leyar.svg')] bg-no-repeat bg-contain opacity-50"></div>
                    <Image
                        src={getImgPath('/images/hero/hero-image.png')}
                        alt='Ogur Luxury Solutions Hizmetleri'
                        width={600}
                        height={500}
                        quality={100}
                        className="object-contain drop-shadow-xl animate-float"
                        style={{ width: '100%', height: 'auto', maxWidth: '550px' }}
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero