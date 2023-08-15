import { BlogType } from '@/interfaces/blogType'
import { MDX, RawDocumentData } from 'contentlayer/core'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface CardPostProps {
    _id: string
    _raw: RawDocumentData
    body: MDX
    type: BlogType
    slugAsParams: string
    slug: string
    title: string
    date?: string
    description?: string
    image?: string
}

export const CardPost: FC<CardPostProps> = (props) => {
    return (
        <li className='max-w-5xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 hover:dark:bg-gray-700  duration-200 hover:scale-[1.01] transition-transform'>
            <Link href={`/en/blog/${props.slugAsParams}`} className='flex flex-row-reverse'>
                {!!props.image && <Image className='rounded-none rounded-r-lg m-0' src={props.image} alt={props.title} height={300} width={300}  quality={50} loading='lazy'  />}
                <div className='px-4 py-2'>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate-two'>
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <div className='flex flex-row justify-between items-center w-full text-xs opacity-30 mb-2'>
                        <span className='truncate'>{props.slug.split('/')[2]}</span>
                        {!!props.date && <small>| {props.date}</small>}
                    </div>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 truncate-five'>
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Accusantium asperiores minima perspiciatis sunt eos, veritatis laudantium nisi excepturi exercitationem
                        rerum tempora deserunt voluptatum consectetur? Minima iure temporibus ab dignissimos deleniti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi reiciendis ut praesentium perspiciatis corporis qui minus optio aspernatur mollitia assumenda natus dicta hic inventore in temporibus, excepturi quos quaerat laborum!
                    </p>
                </div>
            </Link>
        </li>
    )
}
