'use client'

import { ThemeProvider } from 'next-themes'
import { FC, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

interface ProvidersProps {
    children: ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
    return (
        <ThemeProvider attribute='class'>
            {children}
            <Toaster />
        </ThemeProvider>
    )
}
