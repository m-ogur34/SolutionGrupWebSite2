import React from 'react'
import Link from 'next/link'

const ContactInfo = () => {
  return (
    <>
      <section className='dark:bg-darkmode pt-8 md:pb-24 pb-16'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='flex md:flex-row flex-col md:items-center items-start justify-center md:gap-28 gap-8'>
            {/* E-posta Kutusu */}
            <div className='flex sm:flex-row flex-col items-start sm:gap-8 gap-4'>
              <div className='bg-primary/20 w-[3.75rem] h-[3.75rem] flex items-center justify-center rounded-full'>
                 {/* İkonu CSS ile değil doğrudan SVG veya emoji olarak basitleştirebiliriz, şimdilik boş bırakmayalım */}
                 <span className="text-2xl text-primary">✉️</span>
              </div>
              <div className='flex md:flex-col sm:flex-row flex-col md:items-start sm:items-center items-start h-full justify-between'>
                <div>
                  <span className='text-midnight_text dark:text-white text-xl font-bold'>
                    E-posta
                  </span>
                  <p className='text-DeepOcean font-normal text-lg max-w-80 pt-3 pb-7 dark:text-white/50'>
                    Sorularınız ve teklif talepleriniz için bize her zaman yazabilirsiniz.
                  </p>
                </div>
                <div>
                  <Link
                    href='mailto:info@ogurluxurysolutions.com'
                    className='text-primary text-base font-medium flex items-center gap-3 group hover:text-midnight_text dark:hover:text-white'>
                    info@ogurluxurysolutions.com
                  </Link>
                </div>
              </div>
            </div>

            {/* Kariyer / IK Kutusu */}
            <div className='flex sm:flex-row flex-col items-start sm:gap-8 gap-4'>
              <div className='bg-primary/20 w-[3.75rem] h-[3.75rem] flex items-center justify-center rounded-full'>
                <span className="text-2xl text-primary">💼</span>
              </div>
              <div className='flex md:flex-col sm:flex-row flex-col md:items-start sm:items-center items-start h-full justify-between'>
                <div>
                  <span className='text-midnight_text dark:text-white text-xl font-bold'>
                    Kariyer
                  </span>
                  <p className='text-DeepOcean font-normal text-lg max-w-80 pt-3 pb-7 dark:text-white/50'>
                    Ekibimize katılmak ve bizimle çalışmak ister misiniz?
                  </p>
                </div>
                <div>
                  <Link
                    href='mailto:kariyer@ogurluxurysolutions.com'
                    className='text-primary text-base font-medium flex items-center gap-3 group hover:text-midnight_text dark:hover:text-white'>
                    Başvuru Gönder
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Harita Alanı */}
          <div className='md:pt-32 pt-11 md:pb-28 pb-8'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.650490016984!2d28.97835891541341!3d41.00823797930082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e7a7777c43%3A0x4c76cf3dcc8b330b!2sAyasofya-i%20Kebir%20Cami-i%20%C5%9Eerifi!5e0!3m2!1str!2str!4v1631526321452!5m2!1str!2str'
              width='1114'
              height='477'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='rounded-lg w-full border-0'
              title="Ogur Luxury Solutions Ofis Haritası"
            ></iframe>
          </div>
        </div>
        <div className='border-b border-solid border-border dark:border-dark_border'></div>
      </section>
    </>
  )
}

export default ContactInfo