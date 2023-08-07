"use client"

import { Locale } from '@/i18n.config'
import { LangPathName } from '@/lib/langPathName'
import { usePathname } from 'next/navigation'


export const useLang = () => {

  const pathName = usePathname()
  const lang = LangPathName(pathName) as Locale
  return {
    lang
  }
}
