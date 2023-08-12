import { Locale } from '@/i18n.config'
import { FC } from 'react'
import { Join } from '../img/join'
import { getDictionary } from '@/lib/dictionary'
import { Formulario } from './Formulario'

interface ContactProps {
  lang: Locale
}

export const Contact: FC<ContactProps> = async ({ lang }) => {
  const { contact } = await getDictionary(lang)

  return (
    <section id='contact' className='flex flex-row justify-between items-center py-40 gap-6 w-full '>
      <div className='w-full flex justify-center items-center'>
        <Formulario lang={contact} />
      </div>
      <div className=' border-gray-300 border rounded-full p-10'>
        <Join size={20} />
      </div>
    </section>
  )
}
