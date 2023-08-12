import { TextareaAutosize } from '@mui/material'
import { FC, InputHTMLAttributes } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import FieldState from '../FieldState'

interface FieldInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    label: string
    type: InputHTMLAttributes<HTMLInputElement>['type']
    placeholder: string
    typeField: Field
}

type Field = 'textarea' | 'input'

export const FieldInput: FC<FieldInputProps> = ({ type = 'text', name, typeField, label, placeholder }) => {
    const { control } = useFormContext()
    return (
        <div className='mb-6 max-w-lg'>
            <label
                htmlFor={name}
                className='flex flex-col justify-center items-start gap-1 mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400'
            >
                {label}
            </label>
            <Controller
                name={name}
                control={control}
                render={({ field, fieldState }) => (
                    <>
                        {!!(typeField === 'input') && (
                            <div className='relative w-full'>
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
                                    {...field}
                                    aria-invalid={!!fieldState.error}
                                    className='bg-transparent font-medium border-gray-300 dark:border-gray-500 aria-[invalid=true]:border-red-300 dark:aria-[invalid=true]:border-red-400 default:border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-transparent focus:border-primary border-[1px] dark:focus:border-primary dark:placeholder-gray-600 dark:text-gray-400 dark:focus:outline-none  focus:outline-none'
                                    placeholder={placeholder}
                                />
                            </div>
                        )}
                        {typeField === 'textarea' && (
                            <TextareaAutosize
                                {...field}
                                minRows={4}
                                maxRows={10}
                                aria-invalid={!!fieldState.error}
                                className='resize-none bg-transparent font-medium border-gray-300 dark:border-gray-500 aria-[invalid=true]:border-red-300 dark:aria-[invalid=true]:border-red-400 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:bg-transparent focus:border-primary border-[1px] dark:focus:border-primary dark:placeholder-gray-600 dark:text-gray-400 dark:focus:outline-none  focus:outline-none'
                                placeholder={placeholder}
                            />
                        )}
                        {/* {fieldState.error && (
              <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
                <span className='font-medium'>Well done!</span> Some success message.
              </p>
            )} */}

                        {!!fieldState.error && <FieldState msg={fieldState.error.message} />}
                    </>
                )}
            />
        </div>
    )
}
