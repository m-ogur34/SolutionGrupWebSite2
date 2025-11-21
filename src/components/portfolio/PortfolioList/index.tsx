import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { portfolioinfo } from '@/app/api/data'

const PortfolioList = () => {
    return (
        <section id='portfolio' className='md:pb-24 pb-16 pt-8 dark:bg-darkmode'>
            <div className='flex flex-wrap gap-[2.125rem] lg:px-[2.125rem] px-0 max-w-[120rem] w-full justify-center m-auto'>
                {portfolioinfo.map((item, index) => (
                    // DÜZELTME: Link artık dinamik slug alıyor
                    <Link key={index} href={`/portfolio/${item.slug}`} passHref>
                        <div className={`w-[18rem] group ${item.Class}`}>
                            <div className='relative overflow-hidden rounded-lg group-hover:scale-[1.05] transition-all duration-500'>
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    width={400}
                                    height={300}
                                    className="object-cover w-full h-64"
                                />
                            </div>
                            <h4 className='pb-[0.3125rem] pt-[1.5rem] group-hover:text-primary transition-colors text-2xl text-midnight_text font-bold dark:text-white'>
                                {item.title}
                            </h4>
                            <p className='text-secondary font-normal text-lg group-hover:text-primary transition-colors dark:text-white/50'>
                                {item.info}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default PortfolioList