import React, { FC } from 'react'

interface FieldStateProps {
    msg?: string
}

const FieldState: FC<FieldStateProps> = ({msg}) => {
  return (
      <>
    
          <div
            aria-invalid={!!msg}
          className={`flex gap-2 flex-row justify-start items-center py-1 px-2 bg-[#ff000015] rounded-md w-full my-2`}
        >
          {/* <SvgInfo size={1} /> */}
          <p className="text-red-500 dark:text-red-500 text-sm font-normal w-full truncate">
            {msg}
          </p>
        </div>
      </>
  )
}

export default FieldState