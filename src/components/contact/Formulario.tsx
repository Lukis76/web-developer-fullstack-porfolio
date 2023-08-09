"use client"

import { FC } from 'react'
import { FieldInput } from './FieldInput'
import { Locale } from '@/i18n.config'
import { FormProvider, useForm } from 'react-hook-form'
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

  const methods = useForm<FormContact>({
    resolver: zodResolver(FormContactSchema),
    mode: 'onChange'
  })

  const handleSubmit = (data) => {console.log("data => ", data)}

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)} className='w-full max-w-lg'>
          <FieldInput name='email' type='email' label={lang.email.label} placeholder={lang.email.placeholder} typeField='input' />
          <FieldInput name='body' type='text' label={lang.body.label} placeholder={lang.body.placeholder} typeField='textarea' />

          <button type="submit" className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-primary dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {lang.submit}
          </button>
        </form>
      </FormProvider>
    </>

  )
}
