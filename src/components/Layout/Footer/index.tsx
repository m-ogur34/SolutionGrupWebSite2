import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const Footer: FC = () => {
  return (
    <footer className='bg-darkmode relative z-1 border-t border-dark_border px-6'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 grid-cols-1 sm:grid-cols-12'>
          
          {/* Sol Taraf: Logo ve Çağrı */}
          <div className='md:col-span-4 sm:col-span-6 col-span-12 sm:border-r border-b border-solid border-dark_border flex items-center sm:border-b-0 sm:min-h-25 py-10 shrink-0 '>
            <div className='sm:content-normal sm:text-start text-center content-center sm:w-auto w-full'>
              <Link href='/' className='md:block flex justify-center'>
                {/* Logo */}
                <Image
                  src={getImgPath('/images/logo/solution-logo.png')} // Sizin logonuz
                  alt='Ogur Luxury Solutions Logo'
                  width={200}
                  height={60}
                  style={{ width: 'auto', height: 'auto' }}
                  quality={100}
                  className="object-contain"
                />
              </Link>
              <h2 className='text-white py-10 text-[30px] leading-tight font-bold'>
                Projeye Başlamaya <br/> Hazır mısınız?
              </h2>
              <Link
                href='/contact'
                className='px-9 py-3 rounded-lg bg-primary text-white hover:bg-blue-700 hover:shadow-none font-medium'>
                Teklif Alın
              </Link>
            </div>
          </div>

          {/* Orta Kısım: İletişim Bilgileri */}
          <div className='md:col-span-4 sm:col-span-6 col-span-12 sm:flex items-center sm:min-h-25 py-10 justify-center shrink-0 md:border-r border-b sm:border-b-0 border-solid border-dark_border'>
            <div className='flex flex-col md:items-start items-center'>
              <span className='text-lg font-bold text-white pb-4 inline-block'>
                Bize Ulaşın
              </span>
              <div className='pb-5 sm:block flex gap-2'>
                <p className='text-base font-bold text-white'>Telefon</p>
                <Link
                  href='tel:02121234567'
                  className='text-xl text-white/50 hover:text-white'>
                  0 (212) 123 45 67
                </Link>
              </div>
              <div className='sm:block flex items-center gap-3'>
                <p className='text-base font-bold text-white'>E-posta</p>
                <Link
                  href='mailto:info@ogurluxurysolutions.com'
                  className='text-xl text-white/50 hover:text-white'>
                  info@ogurluxurysolutions.com
                </Link>
              </div>
              
              {/* Sosyal Medya İkonları (Şimdilik linkleri # olarak bıraktık) */}
              <div>
                <ul className='flex items-center gap-3 mt-[1.875rem]'>
                  <li className='group'>
                    <Link href='#' className=''>
                      <Image src={getImgPath('/images/footer/facebook.svg')} alt="Facebook" width={25} height={25} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li className='group'>
                    <Link href='#'>
                      <Image src={getImgPath('/images/footer/twitter.svg')} alt="Twitter" width={25} height={25} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li className='group'>
                     <Link href='#'>
                      <Image src={getImgPath('/images/footer/linkedin.svg')} alt="Linkedin" width={25} height={25} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sağ Taraf: Bülten Aboneliği */}
          <div className='md:col-span-4 col-span-12 border-t md:border-none border-solid border-dark_border sm:flex items-center justify-end md:min-h-25 py-10 shrink-0'>
            <div className='md:w-3/4 w-full sm:text-start text-center'>
              <span className='font-bold text-white pb-4 inline-block text-2xl'>
                E-Bülten
              </span>
              <p className='text-MistyBlue text-base pb-7 text-white/50'>
                Sektörel gelişmelerden ve yeniliklerden haberdar olmak için abone olun.
              </p>
              <form className='newsletter-form flex rounded-lg sm:w-full w-3/4 sm:mx-0 mx-auto'>
                <input
                  type='email'
                  placeholder='E-posta adresiniz'
                  className='p-4 text-base border-transparent rounded-s-lg rounded-e-none! outline-0 focus:border-primary dark:focus:border-primary w-[calc(100%_-_137px)] flex bg-white dark:bg-midnight_text dark:text-white dark:border-solid dark:border dark:border-border_color'
                />
                <button
                  type='submit'
                  className='p-[0.625rem] text-base font-medium bg-primary text-white border-none cursor-pointer rounded-e-lg outline-0 text-center w-[8.5625rem] hover:bg-blue-700 hover:shadow-none'>
                  Abone Ol
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* En Alt Telif Hakkı Kısmı */}
      <div className='text-center gap-4 md:gap-0 flex-wrap p-7 border-t border-solid border-dark_border'>
        <div>
          <ul className='flex justify-center mb-4 items-center sm:gap-7 gap-3'>
            <li className='text-base text-white/50'>
              <Link href='/about' className='hover:text-primary'>Hakkımızda</Link>
            </li>
            <li className='text-base text-white/50'>
              <Link href='/services' className='hover:text-primary'>Hizmetler</Link>
            </li>
            <li className='text-base text-white/50'>
              <Link href='/portfolio' className='hover:text-primary'>Projeler</Link>
            </li>
            <li className='text-base text-white/50'>
              <Link href='/contact' className='hover:text-primary'>İletişim</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className='text-base text-white/50'>
            © 2024 Tüm hakları saklıdır. <span className='text-white hover:text-primary cursor-pointer'>Ogur Luxury Solutions</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer