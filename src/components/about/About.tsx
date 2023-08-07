import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { FC } from 'react'
import Image from 'next/image'
import { DrinkCoffee } from '../img/drinkCoffee'

interface AboutProps {
  lang: Locale
}

export const About: FC<AboutProps> = async ({ lang }) => {
  const { about } = await getDictionary(lang)

  return (
    <section id='about' className='flex flex-row justify-between items-center'>
      <div className='flex flex-row justify-between items-center gap-20'>
        <DrinkCoffee size={35} />
        <div className='w-full'>
          <h2 className='text-4xl font-bold text-blue-600 flex flex-row justify-start items-center gap-4'>
            {about.title}
            <i>
              <Image
                quality={0}
                src={"https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1f609.gif"}
                width={42}
                height={42}
                alt='gif emoji guiño'
              />
            </i>
          </h2>
          <p className='mt-4 text-xl max-w-4xl w-full'>{about.body}</p>
        </div>
      </div>
    </section>
  )
} 
