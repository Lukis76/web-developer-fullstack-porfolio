import { About } from '@/components/about/About'
import { Contact } from '@/components/contact/Contact'
import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import { Skills } from '@/components/skills/Skills'
import { Works } from '@/components/works/Works'
import { Locale } from '@/i18n.config'
import { FC } from 'react'

interface HomeProps {
  params: {
    lang: Locale
  }
}

const Home: FC<HomeProps> = async ({ params: { lang } }) => {
  return (
    <>
      <Header lang={lang} />
      <About lang={lang} />
      <Skills lang={lang} />
     <Works lang={lang} /> 
      <Contact lang={lang} />
      <Footer lang={lang} />
    </>
  )
}

export default Home

