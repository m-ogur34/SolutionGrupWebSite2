// Dosya: src/components/Home/Contact/index.tsx

import React from 'react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const Contactform = () => {
  return (
      <section className='overflow-x-hidden bg-darkmode dark:bg-darklight'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='grid md:grid-cols-12 grid-cols-1 md:gap-7 gap-0'>
            {/* Sol Taraf */}
            <div
                className='row-start-1 col-start-1 row-end-2 md:col-end-7 col-end-12'
                data-aos='fade-left'
                data-aos-delay='200'
                data-aos-duration='1000'>
              <div className='flex gap-2 items-center justify-start'>
                <span className='w-3 h-3 rounded-full bg-success'></span>
                <span className='font-medium text-sm text-white'>
                BİZE ULAŞIN
              </span>
              </div>
              <h2 className='sm:text-4xl text-[28px] leading-tight font-bold text-white py-12'>
                Projenizi konuşalım ve işinizi bir üst seviyeye taşıyalım.
              </h2>
              <div className='grid grid-cols-6 pb-12 border-b border-dark_border '>
                <div className='col-span-3'>
                  <span className='text-white/50 text-lg'>Telefon</span>
                  <p className='bg-transparent border-0 text-white text-lg'>
                    0 (212) 123 45 67
                  </p>
                </div>
                <div className='col-span-3'>
                  <span className='text-white/50 text-lg'>E-posta</span>
                  <p className='bg-transparent border-0 text-white text-lg'>
                    info@ogurluxurysolutions.com
                  </p>
                </div>
                <div className='col-span-6 pt-8'>
                  <span className='text-white/50 text-lg'>Adres</span>
                  <p className='bg-transparent border-0 text-white text-lg'>
                    Maslak Mah. Büyükdere Cad. No: 123, Sarıyer / İstanbul
                  </p>
                </div>
              </div>
            </div>

            {/* Sağ Taraf: Form */}
            <div
                data-aos='fade-right'
                data-aos-delay='200'
                data-aos-duration='1000'
                className="relative md:mt-0 mt-8 md:row-start-1 row-start-2 md:col-start-8 col-start-1 row-end-2 col-end-13">

              <div className='bg-white dark:bg-darkmode max-w-[50rem] m-auto pt-[2.1875rem] pb-8 px-[2.375rem] rounded-md relative z-10 shadow-lg'>
                <h2 className='sm:text-3xl text-lg font-bold text-midnight_text mb-3 dark:text-white'>
                  Hemen Teklif Alın
                </h2>
                <form className='flex w-full m-auto justify-between flex-wrap gap-4'>
                  <div className='flex gap-4 w-full'>
                    <input
                        className='text-midnight_text w-1/2 text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-border border-solid focus:border-primary dark:focus:border-primary placeholder:text-grey rounded-lg focus-visible:outline-0'
                        type='text'
                        placeholder='Adınız'
                    />
                    <input
                        type='text'
                        className='text-midnight_text w-1/2 text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-border border-solid focus:border-primary dark:focus:border-primary placeholder:text-grey rounded-lg focus-visible:outline-0'
                        placeholder='Soyadınız'
                    />
                  </div>
                  <div className='w-full'>
                    <input
                        type='email'
                        className='text-midnight_text w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-border border-solid focus:border-primary dark:focus:border-primary placeholder:text-grey rounded-lg focus-visible:outline-0'
                        placeholder='E-posta adresiniz'
                    />
                  </div>
                  <div className='w-full'>
                    {/* Hizmet Seçimi Ekledim */}
                    <select className='text-midnight_text w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-border border-solid focus:border-primary dark:focus:border-primary placeholder:text-grey rounded-lg focus-visible:outline-0'>
                      <option value="">Hizmet Seçiniz</option>
                      <option value="Web Sitesi">Web Sitesi Tasarımı</option>
                      <option value="Dans Yazılımı">Dans Okulu Yazılımı</option>
                      <option value="Rent a Car">Rent a Car Yazılımı</option>
                      <option value="Drone">Drone ile Temizlik</option>
                      <option value="Yalıtım">Bina Yalıtımı</option>
                    </select>
                  </div>
                  <div className='w-full'>
                  <textarea
                      className='text-midnight_text h-[9.375rem] w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-border border-solid focus:border-primary dark:focus:border-primary placeholder:text-grey rounded-lg focus-visible:outline-0'
                      placeholder='Projenizden kısaca bahsedin...'></textarea>
                  </div>
                  <div className='flex items-start'>
                    <input
                        id='wp-comment-cookies-consent'
                        name='wp-comment-cookies-consent'
                        type='checkbox'
                        value='yes'
                        className="mt-1 hover:opacity-1 checked:bg-primary checked:opacity-1 border-2 border-solid border-primary rounded-xs cursor-pointer h-5 w-5 mr-2"
                    />
                    <div className='text-grey dark:text-white/50 text-sm'>
                      <p className='text-primary inline cursor-pointer'>
                        KVKK ve Gizlilik Sözleşmesini
                      </p> okudum, onaylıyorum.
                    </div>
                  </div>
                  <div className='w-full'>
                    <button
                        className='w-full bg-primary hover:bg-blue-700 text-white py-3 rounded-lg transition-colors font-medium'
                        type='submit'>
                      Mesajı Gönder
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contactform