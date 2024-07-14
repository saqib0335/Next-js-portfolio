import React from 'react'
import { getAllPosts } from '@/lib/mdx';
import Link from 'next/link';
import Image from "next/image"
const Articles = async () => {
    const posts = await getAllPosts();
  return (
    <div>
        <h2 className='my-12 text-center text-2xl font-semibold uppercase tracking-wide text-slate-100'>
            Articles
        </h2>
        <div className='mx-2 flex flex-col items-center justify-center'>
            {posts.map((post,index) => (
                <Link href={`/posts/${post.slug}`} key={index}>
                    <div className='mb-12 flex max-w-2xl items-center
                        justify-between rounded-lg bg-slate-300/10 p-4'>
                        <Image src={post.frontMatter.image}
                        alt={post.frontMatter.title}
                        width={150}
                        height={100}
                        className='rounded-lg' />
                        <div className='ml-4'>
                            <h2 className='font-semibold'>
                                {post.frontMatter.title}
                            </h2>
                            <p className='text-sm'>
                                {post.frontMatter.excerpt}
                            </p>
                        </div>
                  </div>
                </Link>
            ))}

        </div>
    </div>
  )
}

export default Articles