import React, { FC } from 'react'

interface TooltipProps {
    children?: React.ReactNode
    text: string
}

const ToolTip: FC<TooltipProps> = ({ children, text }) => {
    return (
        <div className='relative group flex'>
            <span className='absolute top-0 left-0 -translate-y-3/4 translate-x-2 bg-neutral-900  rounded-full  px-3 z-50 after:triangle after:hidden hidden group-hover:after:block group-hover:block transition-all duration-500 after:transition-all after:duration-500 after:border-t-neutral-900 after:-z-30'>
                {text}
            </span>
            {children}
        </div>
    )
}

export default ToolTip
