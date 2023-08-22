"use client"

import { ButtonHTMLAttributes, FC } from 'react'
import { Loading } from '@/components/icons/loading'
import { cn } from '@/lib/utils'

interface ButtonSubmitProps {
  children?: React.ReactNode
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  loading?: boolean
}

export const ButtonSubmit: FC<ButtonSubmitProps> = ({ children, type, loading }) => {
  return (
    <button
      type={type}
      disabled={loading}
      className={cn('text-white bg-primary hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-primary dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex flex-row justify-center items-center gap-4 disabled:opacity-40', loading && "px-6 ")}
    >
      {loading && <Loading />}

      {children}
    </button>
  )
}
