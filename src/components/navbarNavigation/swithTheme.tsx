'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface SwithThemeProps {}

export const SwithTheme = () => {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState<boolean>(false)

    const handleSwithTheme = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <button
            aria-label='Toggle Dark Mode'
            type='button'
            className='flex w-12 h-12 items-center justify-center rounded-lg transition-colors bg-gray-100 border border-gray-300 hover:bg-gray-200  dark:bg-gray-700 dark:hover:bg-gray-600  dark:text-white dark:border-gray-600'
            onClick={handleSwithTheme}
        >
            {resolvedTheme === 'dark' ? <SunIcon className='h-8 w-8 text-orange-300' /> : <MoonIcon className='h-8 w-8 text-slate-800' />}
        </button>
    )
}
