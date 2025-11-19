import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const ContactForm = () => {
  return (
    <>
      <section className='dark:bg-darkmode md:pb-24 pb-16'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='grid md:grid-cols-12 grid-cols-1 gap-8'>
            <div className='col-span-6'>
              <h2 className='max-w-96 text-[40px] leading-tight font-bold mb-9 text-midnight_text dark:text-white'>
                Online Randevu & Bilgi Formu
              </h2>
              <form className='flex flex-wrap w-full m-auto justify-between'>
                <div className='sm:flex gap-3 w-full'>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label className='pb-3 inline-block text-base'>Adınız*</label>
                    <input className='w-full text-base px-4 rounded-lg py-2.5 border-border dark:border-dark_border border-solid dark:text-white dark:bg-darkmode border transition-all duration-500 focus:border-primary focus:outline-0' type='text' />
                  </div>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label className='pb-3 inline-block text-base'>Soyadınız*</label>
                    <input className='w-full text-base px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white dark:bg-darkmode border transition-all duration-500 focus:border-primary focus:outline-0' type='text' />
                  </div>
                </div>
                <div className='sm:flex gap-3 w-full'>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label className='pb-3 inline-block text-base'>E-posta*</label>
                    <input type='email' className='w-full text-base px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white dark:bg-darkmode border transition-all duration-500 focus:border-primary focus:outline-0' />
                  </div>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label className='pb-3 inline-block text-base'>İlgilendiğiniz Hizmet*</label>
                    <select className='w-full text-base px-4 py-2.5 rounded-lg border-border dark:text-white border-solid dark:bg-darkmode border transition-all duration-500 focus:border-primary focus:outline-0'>
                      <option value=''>Seçiniz</option>
                      <option value='Dans Okulu'>Dans Okulu Otomasyonu</option>
                      <option value='Muhasebe'>Muhasebe Yazılımı</option>
                      <option value='Rent a Car'>Rent a Car Otomasyonu</option>
                      <option value='Drone'>Drone ile Temizlik</option>
                      <option value='Yalitım'>Bina Yalıtımı</option>
                    </select>
                  </div>
                </div>
                <div className='mx-0 my-2.5 w-full'>
                   <label className='pb-3 inline-block text-base'>Mesajınız</label>
                   <textarea className='w-full text-base px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white dark:bg-darkmode border transition-all duration-500 focus:border-primary focus:outline-0' rows={4}></textarea>
                </div>
                <div className='mx-0 my-2.5 w-full'>
                  <button type='submit' className='bg-primary rounded-lg text-white py-4 px-8 mt-4 inline-block hover:bg-blue-700 cursor-pointer border-0'>
                    Gönder
                  </button>
                </div>
              </form>
            </div>
            <div className='col-span-6 flex items-center'>
              <Image
                src={getImgPath('/images/contact-page/contact.jpg')}
                alt='Contact'
                width={600}
                height={400}
                quality={100}
                style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm