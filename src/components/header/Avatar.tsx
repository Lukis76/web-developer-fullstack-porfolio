import Image from 'next/image'

export const Avatar = () => {
  return (
    <div>
      <Image src={'https://lucas-manoguerra.netlify.app/avatar/avatar.png'}
        className='w-80 border-8 border-solid border-primary select-none bg-transparent animate-radiusMorph drop-shadow-3xl mr-6'
        style={{ borderRadius: '47% 53% 53% 47% / 46% 47% 53% 54%' }}
        alt='avatar'
        height={300}
        width={300}
      />
    </div>

  )
}
