import Link, { LinkProps } from 'next/link'
import { FC, ReactNode } from 'react'
import { Papper } from '../icons/Papper'

interface LinkResumeProps {
    href: LinkProps['href']
    children: ReactNode
}

export const LinkResume: FC<LinkResumeProps> = ({ children, href }) => {
    return (
        <Link
            href={href}
            target='_blank'
            className='text-primary group hover:text-white border border-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-40 py-2.5 text-center mr-2 mb-2 dark:border-primary dark:text-primary dark:hover:text-white dark:hover:bg-primary dark:focus:ring-blue-800 transition-colors duration-300 opacity-90'
        >
            <p className='flex flex-row justify-center items-center gap-2'>
                {children}
                <i>
                    <Papper
                        size={1.5}
                        className=' stroke-primary group-hover:stroke-white dark:stroke-primary dark:group-hover:stroke-white group-hover:transition-colors duration-300 dark:group-hover:transition-colors dark:group-hover:duration-300'
                    />
                </i>
            </p>
        </Link>
    )
}
