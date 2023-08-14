import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Link from 'next/link'
import { FC } from 'react'
import { RocketMoon } from '../icons/RocketMoon'
import { LiNavToSection } from '../ui/LiNavToSection'
import { LinkBlog } from './linkBlog'
import { LocaleSwitcher } from './swichLang'
import { SwithTheme } from './swithTheme'

interface NavbarNavigationProps {
    lang: Locale
}

export const NavbarNavigation: FC<NavbarNavigationProps> = async ({ lang }) => {
    const { navigation } = await getDictionary(lang)

    return (
        <nav className='flex justify-center items-center bg-[rgba(255,255,255,0.6)] dark:bg-[rgba(0,0,0,0.6)] backdrop-blur-md sticky w-full z-50 top-0 border-b border-gray-200 dark:border-gray-700'>
            <div className='max-w-screen-xl w-full flex flex-row items-center justify-between px-4 gap-4'>
                <Link href={`/${lang}`} className='flex items-center justify-center gap-2'>
                    <RocketMoon size={3.5} className='backdrop-filter drop-shadow-3xl' />
                    <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>RocketDev.</span>
                </Link>
                <div className=' flex flex-row items-center justify-end w-full px-4 text-xl '>
                    <ul className='flex justify-center items-center p-4 md:p-0 mt-4 font-bold flex-row md:space-x-8 md:mt-0  dark:border-gray-700'>
                        <li>
                            <LiNavToSection section={'home'}>{navigation.home}</LiNavToSection>
                        </li>
                        <li>
                            <LiNavToSection section={'about'}>{navigation.about}</LiNavToSection>
                        </li>
                        <li>
                            <LiNavToSection section='works'>{navigation.Works}</LiNavToSection>
                        </li>
                        <li>
                            <LiNavToSection section='contact'>{navigation.Contact}</LiNavToSection>
                        </li>
                        {/* <li>
              <Link href={`/${lang}/blog`} className='flex px-6 h-12 items-center justify-center rounded-lg transition-colors bg-gray-100 border border-gray-300 hover:bg-gray-200  dark:bg-gray-700 dark:hover:bg-gray-600  text-primary dark:text-white font-extrabold dark:border-gray-600'>
                {navigation.blog}
              </Link>
            </li> */}
                        <li>
                            <LinkBlog href={`/${lang}/blog`} />
                        </li>
                    </ul>
                </div>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <SwithTheme />
                    <LocaleSwitcher />
                </div>
            </div>
        </nav>
    )
}
