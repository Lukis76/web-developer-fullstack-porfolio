import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { FC } from 'react'
import { ButtonToWorks } from '../ui/ButtonToWorks'
import { Avatar } from './Avatar'
import { LinkResume } from './LinkResume'

interface HeaderProps {
    lang: Locale
}

export const Header: FC<HeaderProps> = async ({ lang }) => {
    const { header } = await getDictionary(lang)

    return (
        <section id='home' className='flex flex-row justify-between items-center py-52 gap-6'>
            <div className='text-4xl font-medium text-[#242424] dark:text-[#f5f5f5]'>
                <p>{header.hi}</p>
                <h2 className='text-6xl font-black text-primary leading-[1.1]'>{header.dev}</h2>
                <p>{header.footer}</p>
                <div className='text-lg font-semibold flex flex-row justify-start items-center gap-2 mt-14'>
                    <LinkResume href={`/${lang}/resume.pdf`}>{header.button.cv}</LinkResume>
                    <ButtonToWorks className='text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg w-40 py-2.5 mr-2 mb-2 dark:bg-primary dark:hover:bg-blue-800 focus:outline-none dark:focus:ring-primary transition-colors duration-300'>
                        {header.button.work}
                    </ButtonToWorks>
                </div>
            </div>
            <Avatar />
        </section>
    )
}
