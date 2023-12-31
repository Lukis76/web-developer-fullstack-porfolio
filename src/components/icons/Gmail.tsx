import { IconProps } from '@/interfaces/icon'
import { FC } from 'react'

export const Gmail: FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width={`${props.size || 1.2}rem`}
    height={`${props.size || 1.2}rem`}
    fill="none"
    {...props}
  >
   <path d="M5.5 7C3.02 7 1 9.02 1 11.5v.426L25 29l24-17.074V11.5C49 9.02 46.98 7 44.5 7Zm.852 2h37.293L25 22ZM1 14.027V38.5C1 40.98 3.02 43 5.5 43h39c2.48 0 4.5-2.02 4.5-4.5V14.027l-6 4.27V41H7V18.297Z" />
  </svg>
)
