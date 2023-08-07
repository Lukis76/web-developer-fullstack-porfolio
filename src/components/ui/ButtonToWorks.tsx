"use client"

import { scrollToSmoth } from '@/lib/scrollToSmoth'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

interface ButtonToWorksProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const ButtonToWorks: FC<ButtonToWorksProps> = (props) => {
  return (
    <button onClick={() => scrollToSmoth('works')} {...props} >{props.children}</button>
  )
}
