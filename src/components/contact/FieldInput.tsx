import { FormContact } from '@/interfaces/contact'
import { TextareaAutosize } from '@mui/material'
import { FC, InputHTMLAttributes } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

interface FieldInputProps extends InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegister<FormContact>
    field: Field
    isInvalid?: boolean
    error: FieldError | undefined
    langField: {
        label: string
        placeholder: string
    }
}

type Field = 'textarea' | 'input'

export const FieldInput: FC<FieldInputProps> = ({ langField, type, name, register, field, isInvalid, error, lang }) => {
    return (
        <div className='mb-6 max-w-lg'>
            <label className='flex flex-col justify-center items-start gap-1 mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400'>
                {langField.label}
                {field === 'input' && (
                    <div aria-invalid={isInvalid} className='relative w-full'>
                        <div className='absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none'>
                            <svg
                                className='w-4 h-4 text-gray-500 dark:text-gray-400'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 20 16'
                            >
                                <path d='m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z' />
                                <path d='M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z' />
                            </svg>
                        </div>
                        <input
                            type={type}
                            className='bg-transparent font-medium border-gray-300 dark:border-gray-500 invalid:border-red-500 dark:invalid:border-red-500 default:border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-transparent focus:border-primary border-[1px] dark:focus:border-primary dark:placeholder-gray-600 dark:text-gray-400 dark:focus:outline-none  focus:outline-none'
                            placeholder={langField.placeholder}
                        />
                    </div>
                )}
                {field === 'textarea' && (
                    <TextareaAutosize
                        minRows={4}
                        maxRows={10}
                        className='resize-none bg-transparent font-medium border-gray-300 dark:border-gray-500 invalid:border-red-500 dark:invalid:border-red-500 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:bg-transparent focus:border-primary border-[1px] dark:focus:border-primary dark:placeholder-gray-600 dark:text-gray-400 dark:focus:outline-none  focus:outline-none'
                        placeholder={langField.placeholder}
                    ></TextareaAutosize>
                )}
            </label>
            {error && (
                <p className='mt-2 text-sm text-green-600 dark:text-green-500'>
                    <span className='font-medium'>Well done!</span> Some success message.
                </p>
            )}
        </div>
    )
}
