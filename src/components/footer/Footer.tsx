import { Locale } from '@/i18n.config'
import { FC } from 'react'
import { GitHub } from '../icons/Github'
import Link from 'next/link'
import { Gmail } from '../icons/Gmail'
import { LinkedIn } from '../icons/LinkedIn'
import { getDictionary } from '@/lib/dictionary'

interface FooterProps {
  lang: Locale
}

export const Footer: FC<FooterProps> = async ({ lang }) => {


  const { footer } = await getDictionary(lang)

  const dataTime = new Date().getFullYear()
  const year = dataTime.toString().split('-')[0]

  return (
    <footer className="rounded-lg shadow-md my-4 border dark:border-gray-300 border-gray-300">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <div className='flex flex-col justify-center items-start'>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {year} <a href="https://github.com/Lukiis76" className="hover:underline">RocketDev.™</a> </span>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">{footer.copyright}</span>
        </div>
        <ul className="flex flex-wrap gap-4 items-center mt-3 text-sm small font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href='https://linkedin.com/in/lucas-r-manoguerra/' target='_blank' className='flex flex-col justify-center items-center gap-1' >
              <LinkedIn size={2} className='dark:stroke-slate-700 dark:fill-slate-700 stroke-slate-500 fill-slate-500' />
              <p>Linked In</p>
            </Link>
          </li>
          <li>
            <Link href='mailto:kiu.manoguerra@gmail.com?subject=recuiter' className='flex flex-col justify-center items-center gap-1' >
              <Gmail size={2} className='dark:stroke-slate-700 dark:fill-slate-700 stroke-slate-500 fill-slate-500' />
              <p>Gmail</p>
            </Link>
          </li>
          <li>
            <Link href='https://github.com/Lukis76' target='_blank' className='flex flex-col justify-center items-center gap-1' >
              <GitHub size={2} className='dark:stroke-slate-700 dark:fill-slate-700 stroke-slate-500 fill-slate-500' />
              <p>Github</p>
            </Link>
          </li>
        </ul>
      </div>
    </footer>

  )
}
