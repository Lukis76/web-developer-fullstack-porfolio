/* eslint-disable jsx-a11y/role-supports-aria-props */
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { GitHub } from '../icons/Github'
import { LinkProject } from '../icons/LinkProject'

interface ListProjetsProps {
    projects: Project[]
}
interface App {
    msg: string
    development: boolean
}
interface Project {
    title: string
    description: string
    image: string
    github: string
    web: string
    chip: string[]
    app: App
}

export const ListProjects: FC<ListProjetsProps> = ({ projects }) => {
    return (
        <>
            {projects.map((project, idx) => {
                const check: boolean = !(idx % 2)
                return (
                    <li
                        key={idx}
                        aria-checked={check}
                        aria-invalid={project.app.development}
                        className='flex flex-col items-center w-full h-min bg-transparent self-end aria-checked:self-start border border-gray-300 rounded-lg shadow-md md:flex-row md:items-start aria-checked:md:flex-row-reverse md:max-w-6xl dark:border-gray-700 dark:bg-transparent relative overflow-hidden tag aria-[invalid="true"]:after:content-["Developing"] after:opacity-90'
                    >
                        <Image
                            src={'/en/' + project.image}
                            // quality={80}
                            aria-checked={check}
                            className='m-0 border-none rounded-none object-contain rounded-l-lg aria-checked:rounded-none aria-checked:rounded-r-lg w-96 h-auto '
                            height={150}
                            width={300}
                            alt='projet'
                        />
                        <div className='flex flex-col justify-between items-start p-4 leading-normal w-full'>
                            <div className='flex flex-col justify-center items-start w-full'>
                                <div className='flex flex-row justify-center items-center w-full'>
                                    <h5 className='mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate w-full'>
                                        {project.title}
                                    </h5>
                                    <div className='flex flex-row justify-center items-center gap-4 self-start'>
                                        <Link href={project.github} target='_blank' className='hover:scale-110'>
                                            <GitHub
                                                size={2}
                                                className='dark:stroke-slate-700 dark:fill-slate-700 stroke-slate-500 fill-slate-500'
                                            />
                                        </Link>
                                        <Link href={project.web} target='_blank' className='hover:scale-110'>
                                            <LinkProject
                                                size={2}
                                                className='dark:stroke-slate-700 dark:fill-slate-700 stroke-slate-500 fill-slate-500'
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{project.description}</p>
                            </div>
                            <div className='flex flex-wrap justify-start items-start w-full gap-1'>
                                {project.chip.map((chip) => {
                                    return (
                                        <small className=' chip' key={chip}>
                                            {chip}
                                        </small>
                                    )
                                })}
                            </div>
                        </div>
                    </li>
                )
            })}
        </>
    )
}
