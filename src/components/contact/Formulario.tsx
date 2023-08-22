'use client'

import { FormContact, FormContactSchema } from '@/interfaces/contact'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { ButtonSubmit } from '../ui/button-submit'
import { FieldInput } from './FieldInput'

interface FormularioProps {
  lang: {
    email: {
      label: string
      placeholder: string
    }
    body: {
      label: string
      placeholder: string
    }
    submit: string
  }
}

export const Formulario: FC<FormularioProps> = ({ lang }) => {
  const [loading, setLoading] = useState(false)
  const methods = useForm<FormContact>({
    resolver: zodResolver(FormContactSchema),
    mode: 'onChange',
  })

  const handleSubmit = (data: any) => {
    console.log('🚀 ~ file: Formulario.tsx:31 ~ handleSubmit ~ data:', data)
    setLoading(true)

    fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          methods.reset({
            email: '',
            body: '',
          })
          toast.success('Email enviado')
        }
      })
      .catch((err) => {
        toast.error('Error al enviar email')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)} className='w-full max-w-lg'>
        <FieldInput name='email' type='email' label={lang.email.label} placeholder={lang.email.placeholder} typeField='input' />
        <FieldInput name='body' type='text' label={lang.body.label} placeholder={lang.body.placeholder} typeField='textarea' />
        <ButtonSubmit loading={loading}>{lang.submit}</ButtonSubmit>
      </form>
    </FormProvider>
  )
}
