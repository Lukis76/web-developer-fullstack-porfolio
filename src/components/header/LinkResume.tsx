import Link from 'next/link'
import { FC, ReactNode } from 'react'
import { Papper } from '../icons/Papper'

interface LinkResumeProps {
  children: ReactNode
}

export const LinkResume: FC<LinkResumeProps> = ({ children }) => {
  return (
    <Link href={'resume.pdf'} target='_blank' className='text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-40 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'>
      <p className='flex flex-row justify-center items-center gap-2'>
        {children}
        <i>
          <Papper size={1.5} className=' stroke-blue-700  dark:stroke-blue-500' />
        </i>
      </p>
    </Link>
  )
}
