import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { FC } from 'react'
import { Accordion } from '../Acordion'
import Techs from './techs'
import { listTechs } from './techs.data'

interface SkillsProps {
    lang: Locale
}

export const Skills: FC<SkillsProps> = async ({ lang }) => {
    const { dataQuest } = await getDictionary(lang)

    return (
        <section className='py-52 flex  flex-col justify-center items-center gap-10'>
            <h2 className='text-4xl font-bold text-blue-600 flex flex-row justify-start items-center gap-4 w-full'>Tech skills</h2>
            <div className='flex flex-row justify-center items-center w-full gap-4 flex-wrap'>
                {listTechs.map((tech) => {
                    return <Techs key={tech.label} {...tech} />
                })}
            </div>
            <Accordion dataQuest={dataQuest} />
        </section>
    )
}
