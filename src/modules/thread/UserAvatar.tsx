import classNames from 'classnames'
import Image from 'next/image'

interface Props {
  name: string
  imgUrl?: string
  small?: boolean
}

export default function UserAvatar({ name, imgUrl, small }: Props) {
  return (
    <>
      {imgUrl ? (
        <Image
          width={small ? 16 : 40}
          height={small ? 16 : 40}
          src={imgUrl}
          alt=""
          className="rounded-full"
        />
      ) : (
        <span
          className={classNames(
            'inline-block rounded-full  text-center text-white bg-cyan-600 font-bold',
            small
              ? 'leading-4 w-4 h-4 text-[10px]'
              : 'leading-10 w-10 h-10 text-[28px] '
          )}
        >
          {name.charAt(0).toUpperCase()}
        </span>
      )}
    </>
  )
}
