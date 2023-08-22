import { IconProps } from '@/interfaces/icon'
import { FC } from 'react'

export const Loading: FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    width={`${props.size || 1.2}rem`}
    height={`${props.size || 1.2}rem`}
    fill="none"
  className={"animate-spin"}
    {...props}
  >
      <path
      stroke="#242424"
      strokeLinecap="round"
      strokeWidth={3.556}
      d="M20 12a8 8 0 0 1-11.76 7.061"
    />
  </svg>

)
