import { allPosts } from 'contentlayer/generated'
// import { notFound } from 'next/navigation'
import { CardPost } from '@/components/card-post'
import { FC } from 'react'
interface BlogPageProps {}

// async function getPostFormParams(slug: string) {
//     const post = allPosts.find((post) => post.slugAsParams === slug)

//     if (!post) notFound()
//     return post
// }

const BlogPage: FC<BlogPageProps> = () => {
    return (
        <div className='flex flex-col justify-start items-center py-10 w-full'>
            <ul className='flex flex-row gap-4 justify-center items-center flex-wrap w-full'>
                {allPosts.map((post) => {
                    return (
                        <>
                            <CardPost key={1} {...post} />
                            <CardPost key={2} {...post} />
                            <CardPost key={3} {...post} />
                            <CardPost key={4} {...post} />
                            <CardPost key={5} {...post} />
                        </>
                    )
                })}
            </ul>
        </div>
    )
}

export default BlogPage
