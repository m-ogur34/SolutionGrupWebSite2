import React from 'react'
import BlogList from '@/components/Blog/BlogList'
import HeroSub from '@/components/SharedComponent/HeroSub'

const BlogPage = () => {
    const breadcrumbLinks = [
        { href: '/', text: 'Ana Sayfa' },
        { href: '/blog', text: 'Blog' },
    ]
    return (
        <>
            <HeroSub
                title='Blog'
                description='Sektörel gelişmeler, teknolojik yenilikler ve şirketimizden en güncel haberler.'
                breadcrumbLinks={breadcrumbLinks}
            />
            <BlogList />
        </>
    )
}

export default BlogPage