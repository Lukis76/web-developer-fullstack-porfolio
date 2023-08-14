import { FC } from 'react'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from '@/components/mdx-components'


interface PostProps {
    params: {
        slug: string
    }
}

async function getPostFormParams(slug: string) {
    const post = allPosts.find(post =>  post.slugAsParams === slug)

    if (!post) notFound()
    return post
}

const Post: FC<PostProps> = async ({ params }) => {
    const post = await getPostFormParams(params.slug)

    return (
        <div className='flex min-h-screen flex-col items-center justify-start max-w-5xl p-24 gap-4'>
            <Mdx code={post.body.code}  />
        </div>
    )
}

export default Post
