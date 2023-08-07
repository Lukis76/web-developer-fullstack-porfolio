/* eslint-disable jsx-a11y/role-supports-aria-props */
"use client"

import { FC } from 'react'
import Image from 'next/image'
import { GitHub } from '../icons/Github'
import Link from 'next/link'
import { LinkProject } from '../icons/LinkProject'

interface ListProjetsProps {
  projects: Project[]
}
interface Project {
  title: string
  description: string
  image: string
  github: string
  web: string
}

export const ListProjects: FC<ListProjetsProps> = ({ projects }) => {
  return (
    <>
      {
        projects.map((project, idx) => {
          const check: boolean = !(idx % 2)
          return (
            <li key={idx} aria-checked={check} className="flex flex-col items-center h-min bg-transparent self-end aria-checked:self-start border border-gray-200 rounded-lg shadow md:flex-row md:items-start aria-checked:md:flex-row-reverse md:max-w-6xl  dark:border-gray-700 dark:bg-transparent ">
              <Image
                src={project.image}
                quality={10}
                aria-checked={check}
                className="object-contain  rounded-t-lg aria-checked:rounded-r-lg w-full max-w-[25rem]  md:rounded-none md:rounded-l-lg aria-checked:md:rounded-r-lg"
                height={150}
                width={300}
                alt="work"
              />
              <div className="flex flex-col justify-start p-4 leading-normal">
                <div className='flex flex-row justify-center items-center w-full'>
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate w-full">
                    {project.title}
                  </h5>
                  <div className='flex flex-row justify-center items-center gap-4 self-start'>
                    <Link href={project.github}>
                      <GitHub size={2} className='dark:stroke-slate-700 dark:fill-slate-700 stroke-slate-500 fill-slate-500' />
                    </Link>
                    <Link href={project.web}>
                      <LinkProject size={2} className='dark:stroke-slate-700 dark:fill-slate-700 stroke-slate-500 fill-slate-500' />
                    </Link>
                  </div>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
            </li>
          )
        })
      }

    </>
  )
}
