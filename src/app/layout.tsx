import { Locale } from '@/i18n.config'
import { Metadata } from 'next'
import { FC, ReactNode } from 'react'

export const metadata: Metadata = {
  icons: {
    icon: 'https://rocketdev.vercel.app/en/favicon.ico',
  },
  title: 'lucas manoguerra | web developer full stack',
  description:
    'Full stack developer with experience in | Javascript | Nextjs | Reactjs | Redux | Typescript | Nodejs | Express | GraphQL | Mongodb | PostgreSQL | Prisma | sequelize | Cypress | Jest | HTML | CSS | Figma.',
  openGraph: {
    title: 'lucas manoguerra | web developer full stack',
    description:
      'Full stack developer with experience in | Javascript | Nextjs | Reactjs | Redux | Typescript | Nodejs | Express | GraphQL | Mongodb | PostgreSQL | Prisma | sequelize | Cypress | Jest | HTML | CSS | Figma.',
    type: 'website',
    url: 'https://rocketdev.vercel.app',
    images: ['https://rocketdev.vercel.app/en/screen-porfolio.png'],
  },
}

interface LocaleLayoutProps {
  children: ReactNode
  params: {
    lang: Locale
  }
}

const LocaleLayout: FC<LocaleLayoutProps> = ({ children, params }) => {
  return (
    <html lang={params.lang}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}

export default LocaleLayout
