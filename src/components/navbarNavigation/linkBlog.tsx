import Link from 'next/link'
import { FC } from 'react'

interface LinkBlogProps {
    href: string
}
export const LinkBlog: FC<LinkBlogProps> = ({ href }) => {
    return (
        <Link
            href={href}
            className='flex px-6 h-12 items-center justify-center rounded-lg transition-colors bg-gray-100 border border-gray-300 hover:bg-gray-200  dark:bg-gray-700 dark:hover:bg-gray-600  text-primary dark:text-white font-extrabold dark:border-gray-600 relative overflow-hidden tag after:content-["soon"] after:opacity-80 after:text-xs'
        >
            Blog
        </Link>
    )
}
