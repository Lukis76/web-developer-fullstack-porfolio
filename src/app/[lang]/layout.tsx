import { NavbarNavigation } from '@/components/navbarNavigation'
import { Locale, i18n } from '@/i18n.config'
import { Providers } from '@/providers/Providers'
import { Inter } from 'next/font/google'
import { FC, ReactNode } from 'react'
import './global.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body suppressHydrationWarning={true} className={`${inter.className} flex flex-col justify-start items-center min-h-screen w-full`}>
        <Providers>
          <NavbarNavigation lang={params.lang} />
          <main className='flex flex-col justify-start items-center w-full max-w-7xl px-4 transition-all duration-500 '>{children}</main>
        </Providers>
      </body>
    </html>
  )
}

export default LocaleLayout
