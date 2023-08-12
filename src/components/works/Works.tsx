import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { FC } from 'react'
import { ListProjects } from './ListProjects'
interface WorksProps {
    lang: Locale
}

export const Works: FC<WorksProps> = async ({ lang }) => {
    const { works } = await getDictionary(lang)

    return (
        <section id='works' className='flex flex-col justify-center items-start w-full py-40 gap-10'>
            <h2 className='text-4xl font-bold text-primary flex flex-row justify-start items-center gap-4'>{works.title}</h2>
            <ul className='flex flex-col justify-center items-center w-full gap-6'>
                <ListProjects projects={works.principal} />
            </ul>
            {/* <Link
                href={'#'}
                className=' flex flex-row justify-center items-center gap-2 text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-md px-5 py-2.5 dark:bg-primary dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-colors duration-300'
            >
                {works.add}
                <i>
                    <LinkProject size={1.2} className='dark:stroke-white dark:fill-white stroke-white fill-white' />
                </i>
            </Link> */}
        </section>
    )
}
