import { Locale } from '@/i18n.config'
import { FC } from 'react'
import { getDictionary } from '@/lib/dictionary'
import { ListProjects } from './ListProjects'
import Link from 'next/link'
import { GitHub } from '../icons/Github'
import { LinkProject } from '../icons/LinkProject'
interface WorksProps {
  lang: Locale
}

export const Works: FC<WorksProps> = async ({ lang }) => {
  const { works } = await getDictionary(lang)

  return (
    <section id='works' className='flex flex-col justify-center items-start w-full pt-20 gap-10'>
      <h2 className='text-4xl font-bold text-blue-600 flex flex-row justify-start items-center gap-4'>{works.title}</h2>
      <ul className='flex flex-col justify-center items-center w-full gap-6'>
        <ListProjects projects={works.principal} />
      </ul>
      <Link href={"#"} className=" flex flex-row justify-center items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-md px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        {works.add}
        <i>
        <LinkProject size={1.2} className='dark:stroke-white dark:fill-white stroke-white fill-white' />
      </i>
    </Link>
    </section >
  )
}
