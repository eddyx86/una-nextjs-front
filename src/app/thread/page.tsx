import Icon from '@/global/Icon'
import BreadCrumbs from '@/modules/thread/BreadCrumbs'
import Replies from '@/modules/thread/Replies'
import TrophyAndBages from '@/modules/thread/TrophyAndBages'
import UserAvatar from '@/modules/thread/UserAvatar'
import classNames from 'classnames'

export default function ThreadPage() {
  const cardClazz =
    'flex flex-col p-4 bg-white rounded-md border border-slate-200 shadow-md'

  return (
    <div className="bx-def-color-bg-page min-h-screen pt-16 text-gray-800">
      <div className=" bx-def-page-width mx-auto px-3 md:px-4 lg:px-6">
        {/*  page nav */}
        <BreadCrumbs
          category="Troubleshooting "
          title={`Error with User's Joined Groups page allows anyone to see other people's joined groups including Secret. `}
        />

        {/*  thread detail */}
        <main className="flex gap-6">
          {/*  main content */}
          <div className="flex flex-col gap-6 w-2/3">
            {/* thread title */}
            <div className={classNames(cardClazz, 'gap-8')}>
              <div data-title>
                <h1 className="font-extrabold text-3xl text-black">
                  {`Error with User's Joined Groups page allows anyone to see other people's joined groups including Secret.`}
                </h1>
              </div>
              <div data-content className="">
                {`How do I make this page- User's Joined Groups (domain/joined-groups/profile-name) private to only the owner? If I'm a user I can put in any user's name in that url and get their joined groups. And then I can see even their secret groups that have been joined.`}
              </div>
            </div>
            {/* view and share */}
            <div className={cardClazz}>
              <ul className="flex items-center list-none gap-4">
                <li className="flex items-center gap-1 border border-gray-300 rounded-md py-2 px-4  ">
                  <Icon
                    name="eye"
                    className="w-[14px] h-4 text-gray-700 inline-block mr-2"
                  />
                  <span className=" font-semibold inline-block text-sm mr-3">
                    View
                  </span>
                  <span className=" inline-block">{21}</span>
                </li>
                <li className="flex items-center gap-1 border border-gray-300 rounded-md py-2 px-4  ">
                  <Icon
                    name="share"
                    className="w-[14px] h-4 text-gray-700 inline-block mr-2"
                  />
                  <span className=" font-semibold inline-block text-sm mr-3">
                    Share
                  </span>
                </li>
              </ul>
            </div>
            <div className={classNames(cardClazz, 'gap-4')}>
              <h2 className="text-xl font-bold">Replies {`(${2})`}</h2>
              <Replies />
              <div className="flex items-center mx-auto p-4 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 uppercase rounded-md">
                <button>LOGIN OR JOIN TO COMMENT.</button>
              </div>
            </div>
          </div>

          {/*  profile */}
          <div className="flex flex-col gap-6 w-1/3">
            <div className={cardClazz}>
              <div className="mx-[-16px] mt-[-16px] rounded-md  h-40 bg-blue-500"></div>
              <div className="relative flex flex-col gap-2 items-center p-4 mt-[-120px]">
                <div>
                  <span
                    className={classNames(
                      'inline-block rounded-full  text-center text-white bg-cyan-600 font-bold',
                      'leading-48 w-48 h-48 text-5xl box-content',
                      'flex items-center text-center justify-center',
                      ' border-4 border-white'
                    )}
                  >
                    K
                  </span>
                </div>
                <div className="flex flex-col gap-3 pt-4 ">
                  <h2 className="text-2xl font-bold text-center">Karina</h2>
                  {/* User Tropy and Bages */}
                  <TrophyAndBages />
                </div>
              </div>
            </div>
            <div className={classNames(cardClazz)}>
              <div className="grow flex justify-end gap-2">
                <UserAvatar name="LeoniDS" imgUrl="/img/userImg02.png" />
                <UserAvatar name="Karina" />
              </div>
            </div>

            {/* Info */}
            <div className={cardClazz}>
              <h2 className=" font-semibold text-xl">Info</h2>
              <div className="flex flex-col gap-3 mt-4 text-sm text-slate-600">
                <div>
                  <p className="font-semibold">Category:</p>
                  <p>{'Troubleshooting'}</p>
                </div>
                <div>
                  <p className="font-semibold">Added:</p>
                  <p>{'14 Jan 2024'}</p>
                </div>
                <div>
                  <p className="font-semibold">Changed:</p>
                  <p>{'14 Jan 2024'}</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
