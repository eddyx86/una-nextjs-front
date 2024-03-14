import Image from 'next/image'
import Icon from './Icon'

interface Props {
  userName: string
  userImageUrl?: string
  updateTime: string
  replies: number
}

export default function ThreadStatus({
  userName,
  userImageUrl,
  updateTime,
  replies,
}: Props) {
  return (
    <>
      <ul className="flex items-center gap-2 list-none py-3 flex-wrap">
        {/** vote up and down */}
        <li>
          <span className=" inline-block  bg-gray-100 border border-gray-300 rounded-md">
            <button className="inline-block px-1.5">
              <Icon name="arrow-up" className="w-3 h-3 text-gray-800" />
            </button>
            <button className="inline-block px-1.5 border-l border-gray-300">
              <Icon name="arrow-down" className="w-3 h-3 text-gray-800" />
            </button>
          </span>
        </li>

        {/** user profile */}
        <li>
          <button className=" inline-block px-2 hover:rounded-md hover:border-gray-300 hover:bg-gray-100">
            {userImageUrl ? (
              <Image
                className="rounded-full inline-block mr-1"
                width={16}
                height={16}
                src={userImageUrl}
                alt=""
              />
            ) : (
              <Icon
                name="no-picture"
                className="w-4 h-4 rounded-full inline-block mr-1"
              />
            )}

            <span className="text-xs font-semibold text-slate-700">
              {userName}{' '}
            </span>
          </button>
        </li>

        {/** update time*/}
        <li>
          <button className=" inline-block px-2 hover:rounded-md hover:border-gray-300 hover:bg-gray-100">
            <Icon
              name="clock"
              className=" w-3 h-3 text-gray-700 inline-block mr-1"
            />

            <span className="text-xs font-semibold text-slate-700">
              {updateTime}{' '}
            </span>
          </button>
        </li>

        {/** replies */}
        <li>
          <button className=" inline-block px-2 hover:rounded-md hover:border-gray-300 hover:bg-gray-100">
            <Icon
              name="comments"
              className="w-3.5 h-3.5 text-gray-700 inline-block mr-1"
            />

            <span className="text-xs font-semibold text-slate-700">
              Replies ({replies})
            </span>
          </button>
        </li>
      </ul>
    </>
  )
}
