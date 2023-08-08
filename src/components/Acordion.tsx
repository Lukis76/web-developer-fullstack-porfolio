/* eslint-disable jsx-a11y/role-supports-aria-props */
'use client'

import { FC, useState } from 'react'

interface AccordionProps {
    dataQuest: DataQuest[]
}

interface DataQuest {
    title: string
    body: string
}

export const Accordion: FC<AccordionProps> = ({ dataQuest }) => {
    const [current, setCurrent] = useState<number | null>(null)

    const select = (i: number) => {
        setCurrent((prev) => (prev == i ? null : i))
    }

    return (
        <div className='flex flex-col justify-center items-center gap-2 w-full'>
            {dataQuest.map((item, idx) => {
                return (
                    <div
                        key={idx}
                        className='w-full border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 '
                    >
                        <button
                            type='button'
                            onClick={() => select(idx)}
                            aria-selected={current === idx}
                            className={`flex items-center justify-between w-full p-5 text-left text-gray-500 border-none border-b-gray-200 rounded-xl aria-selected:rounded-none aria-selected:rounded-t-xl dark:border-b-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 aria-selected:dark:bg-gray-800 aria-selected:bg-blue-100 `}
                        >
                            <span className='text-xl font-semibold text-primary'>{item.title}</span>
                            <svg
                                aria-selected={current === idx}
                                className={`w-3 h-3 shrink-0 transition-all duration-500 rotate-180 aria-selected:rotate-0`}
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 10 6'
                            >
                                <path
                                    stroke='currentColor'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    d='M9 5 5 1 1 5'
                                />
                            </svg>
                        </button>
                        <p
                            aria-hidden={current !== idx}
                            className='aria-hidden:hidden p-5 text-lg'
                            dangerouslySetInnerHTML={{ __html: item.body }}
                        />
                    </div>
                )
            })}
        </div>
    )
}
