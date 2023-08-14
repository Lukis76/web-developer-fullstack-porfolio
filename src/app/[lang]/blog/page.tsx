import { allPosts } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FC } from 'react'
interface BlogPageProps {}

async function getPostFormParams(slug: string) {
    const post = allPosts.find((post) => post.slugAsParams === slug)

    if (!post) notFound()
    return post
}

const BlogPage: FC<BlogPageProps> = () => {
    return (
        <div className='flex flex-col justify-start items-center py-10'>
            <ul className='flex flex-col gap-2 justify-center items-center flex-wrap'>
                {allPosts.map((post) => {
                    return (
                        <li key={post.slug} className='border rounded-lg border-slate-300 dark:border-slate-700'>
                            <Link href={`/blog/${post.slug.split('/')[2]}`} className='flex flex-row justify-center items-start'>
                                <div className='flex flex-col justify-center items-start p-2'>
                                    <h3>{post.title}</h3>
                                    <span>{post.slug.split('/')[2]}</span>
                                    <small>{post.date}</small>
                                    <p>{post.description}</p>
                                </div>
                                {!!post?.image && <Image src={post.image} quality={50} width={200} height={200} alt={post.title} className='rounded-r-lg' />}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default BlogPage
