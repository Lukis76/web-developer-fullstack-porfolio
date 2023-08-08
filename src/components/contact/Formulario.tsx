"use client"

import { FC } from 'react'
import { FieldInput } from './FieldInput'
import { Locale } from '@/i18n.config'
import { useForm } from 'react-hook-form'
import { FormContact, FormContactSchema } from '@/interfaces/contact'
import { zodResolver } from '@hookform/resolvers/zod'

interface FormularioProps {
  lang: {
    email: {
      label: string
      placeholder: string
    }
    body: {
      label: string
      placeholder: string
    },
    submit: string
  }
}

export const Formulario: FC<FormularioProps> = ({ lang }) => {

  const {
    reset,
    register,
    handleSubmit,
    formState: {
      errors,
      isValid,
      isLoading,
      isSubmitted
    }
  } = useForm<FormContact>({
    resolver: zodResolver(FormContactSchema),
    mode: 'onChange'
  })

  return (
    <form className='w-full max-w-lg'>
      <FieldInput name='email' type='email' langField={lang.email} error={errors?.email} register={register} field='input' />
      <FieldInput name='body' type='text' langField={lang.body} error={errors?.body} register={register} field='textarea' />

      <button type="submit" className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-primary dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {lang.submit}
      </button>
    </form>

  )
}
