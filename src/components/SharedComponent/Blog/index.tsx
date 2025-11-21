// Dosya: src/components/SharedComponent/Blog/index.tsx

import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import BlogCard from './blogCard'
import { getAllPosts } from '@/utils/markdown'

const Blog: React.FC = () => {
  // Blogları tarihe göre sıralayıp ilk 3 tanesini alıyoruz
  const posts = getAllPosts([
    'title',
    'date',
    'excerpt',
    'coverImage',
    'slug',
  ]).slice(0, 3)

  return (
      <section
          className='flex flex-wrap justify-center pt-8 md:pb-24 pb-16 dark:bg-darkmode'
          id='blog'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='flex items-baseline justify-between flex-wrap gap-4 mb-8'>
            <h2
                className='text-4xl font-bold text-midnight_text dark:text-white'
                data-aos='fade-right'
                data-aos-delay='200'
                data-aos-duration='1000'>
              Son Haberler & Blog
            </h2>
            <Link
                href='/blog'
                className='flex items-center gap-2 text-base text-midnight_text dark:text-white dark:hover:text-primary font-medium hover:text-primary transition-colors'
                data-aos='fade-left'
                data-aos-delay='200'
                data-aos-duration='1000'>
              Tümünü Gör
              <Icon icon='solar:arrow-right-outline' width='24' height='24' />
            </Link>
          </div>
          <div className='grid md:grid-cols-12 gap-7'>
            {posts.length > 0 ? (
                posts.map((blog, i) => (
                    <div
                        key={i}
                        className='w-full lg:col-span-4 md:col-span-6 col-span-12'
                        data-aos='fade-up'
                        data-aos-delay={`${i * 200}`}
                        data-aos-duration='1000'>
                      <BlogCard blog={blog} />
                    </div>
                ))
            ) : (
                <div className="col-span-12 text-center text-gray-500">Henüz blog yazısı eklenmedi.</div>
            )}
          </div>
        </div>
      </section>
  )
}

export default Blog