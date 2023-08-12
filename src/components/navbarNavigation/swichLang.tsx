'use client'

import { i18n } from '@/i18n.config'
import { LangPathName } from '@/lib/langPathName'
import { redirectedPathName } from '@/lib/redirectPathName'
import { setLangStorage } from '@/lib/storage/setLangStorage'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const LocaleSwitcher = () => {
    const router = useRouter()
    const pathName = usePathname()

    const handleRedirect = (lang: string) => {
        const local = redirectedPathName({ locale: lang, pathName: pathName })
        router.replace(local)
    }
    useEffect(() => {
        setLangStorage(LangPathName(pathName))
    }, [pathName])

    return (
        <div className='flex group p-2 w-16 '>
            <button
                className='peer relative uppercase font-bold flex justify-center items-center z-10 w-12 h-12  text-sm  text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200  dark:bg-gray-700 dark:hover:bg-gray-600  dark:text-white dark:border-gray-600'
                type='button'
            >
                {LangPathName(pathName)}
            </button>
            <div className='hidden group-hover:flex absolute bottom-0 translate-y-full w-12 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 hover:flex font-bold border border-gray-300 dark:border-gray-600'>
                <ul className='py-2 text-sm text-gray-700 dark:text-gray-200 w-full'>
                    {i18n.locales.map((locale) => {
                        return (
                            <li key={locale} className='w-full'>
                                <button
                                    onClick={() => handleRedirect(locale)}
                                    className='flex uppercase w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'
                                >
                                    {locale}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
