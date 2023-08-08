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
                <Link href={link} className='flex w-10 h-10 hover:scale-125 hover:transition-all hover:duration-200'>
                    <Image className='flex' quality={1} src={image} width={40} height={40} alt={`logo ${label}`} />
                </Link>
            </ToolTip>
        </>
    )
}

export default Techs
