import React from 'react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const Testimonial = () => {
  return (
    <section
      className='scroll-mt-24 bg-section dark:bg-darklight border-none'
      id='testimonials'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className="text-center">
          {/* Vektör Görseli */}
          <Image
            src={getImgPath('/images/testimonial/vector-smart.png')}
            alt='Vizyonumuz'
            width={150}
            height={150}
            quality={100}
            className='w-auto h-32 m-auto mb-8 opacity-80'
          />
          
          <h2 className="text-3xl font-bold text-midnight_text dark:text-white mb-8">
            Vizyonumuz
          </h2>

          <div className='pb-10'>
            <p className='font-medium md:text-2xl text-lg text-midnight_text dark:text-white text-center max-w-4xl mx-auto italic leading-relaxed'>
              &quot;Teknolojiyi ve insani değerleri bir araya getirerek, iş ortaklarımızın en karmaşık sorunlarına
              basit, etkili ve sürdürülebilir çözümler üretmek; yerel başarılarımızı global standartlara taşımaktır.&quot;
            </p>
          </div>
          
          <div className='text-center'>
            <strong className='text-lg font-bold text-primary block mb-2'>
              Ogur Luxury Solutions Ekibi
            </strong>
            <p className='text-base text-gray dark:text-white/50 '>
              Geleceği Birlikte Tasarlıyoruz
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial