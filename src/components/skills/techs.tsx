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
                    <Image className='flex' quality={1} src={image} width={40} height={40} alt={`logo ${label}`} />
                </Link>
            </ToolTip>
        </>
    )
}

export default Techs
