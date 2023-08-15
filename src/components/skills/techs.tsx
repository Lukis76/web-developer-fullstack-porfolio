import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import ToolTip from '../ToolTip'

interface TechsProps {
    image: string
    label: string
    link: string
}

const Techs: FC<TechsProps> = ({ image, label, link }) => {
    return (
        <>
            <ToolTip text={label}>
                <Link href={link} target='_blank' className='flex'>
                    <Image className='flex h-10 w-10 m-0 border-none rounded-none' quality={1} src={image} width={40} height={40} alt={`logo ${label}`} />
                </Link>
            </ToolTip>
        </>
    )
}

export default Techs
