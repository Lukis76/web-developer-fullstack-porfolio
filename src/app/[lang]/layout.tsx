import { NavbarNavigation } from '@/components/navbarNavigation'
import { Locale, i18n } from '@/i18n.config'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { FC, ReactNode } from 'react'
import { Providers } from '../../porviders/Providers'
import './global.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    icons: {
        icon: 'https://rocketdev.vercel.app/en/favicon.ico',
    },
    title: 'lucas manoguerra - portfolio',
  description: 'lucas manoguerra - portfolio - web developer fullstack',
  openGraph: {
    title: 'lucas manoguerra - portfolio',
    description: 'lucas manoguerra - portfolio - web developer fullstack',
    images: [
      "https://rocketdev.vercel.app/en/screen-porfolio.png"
    ]
    }
}

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }))
}

interface LocaleLayoutProps {
    children: ReactNode
    params: {
        lang: Locale
    }
}

const LocaleLayout: FC<LocaleLayoutProps> = ({ children, params }) => {
    // Show a 404 error if the user requests an unknown locale
    // if (params.locale !== locale) {
    // notFound();
    // }

    return (
        <html lang={params.lang}>
            {/* <head>
                <meta property='og:title' content='Título de tu página' />
                <meta property='og:description' content='Descripción de tu página' />
                <meta property='og:image' content='https://rocketdev.vercel.app/en/screen-porfolio.png' />
            </head> */}
            <body
                suppressHydrationWarning={true}
                className={`${inter.className} flex flex-col justify-start items-center min-h-screen w-full`}
            >
                <Providers>
                    <NavbarNavigation lang={params.lang} />
                    <main className='flex flex-col w-full max-w-7xl px-4 transition-all duration-500'>{children}</main>
                </Providers>
            </body>
        </html>
    )
}

export default LocaleLayout
