import Image from 'next/image'
import Link from 'next/link'
import GroupImages from '../../global/GroupImages'
import ThreadStatus from '../../global/ThreadStatus'

export default function HomeForumList() {
  const threads = [
    {
      title: `Error with User's Joined Groups page allows anyone to see other people's joined groups including Secret. `,
      coverImgUrl: null,
      status: {
        userName: 'Karina',
        userImageUrl: '',
        updateTime: 'a day ago',
        replies: 2,
      },
    },
    {
      title: `Modzzz Apps Support`,
      coverImgUrl: null,
      status: {
        userName: 'Jerome Mingo',
        userImageUrl: '',
        updateTime: '1 Aug 2021',
        replies: 415,
      },
    },
    {
      title: `Потоки перестали работать`,
      coverImgUrl: null,
      status: {
        userName: 'Алексей',
        userImageUrl: '/img/userImg01.jpg',
        updateTime: '16 hours ago',
        replies: 0,
      },
    },
    {
      title: `Link Domain/timeline-view`,
      coverImgUrl: null,
      status: {
        userName: 'SmartStylez',
        userImageUrl: '',
        updateTime: '16 hours ago',
        replies: 0,
      },
    },
    {
      title: `Custom Displays of Standard Forms on Standard or Custom Page`,
      coverImgUrl: null,
      status: {
        userName: 'SmartStylez',
        userImageUrl: '',
        updateTime: '16 hours ago',
        replies: 0,
      },
    },
    {
      title: `Platform UNA is The Best!!!`,
      coverImgUrl: '/img/coverImg03.png',
      status: {
        userName: 'SmartStylez',
        userImageUrl: '',
        updateTime: '16 hours ago',
        replies: 5,
      },
    },
    {
      title: `How to list URLs in Footer?`,
      coverImgUrl: null,
      status: {
        userName: 'SmartStylez',
        userImageUrl: '',
        updateTime: '16 hours ago',
        replies: 3,
      },
    },
    {
      title: `'Show more' on Popular Hashtags block does not work on 13.1`,
      coverImgUrl: null,
      status: {
        userName: 'SmartStylez',
        userImageUrl: '',
        updateTime: '16 hours ago',
        replies: 5,
      },
    },
    {
      title: `Styling for Meta info - Photos, Videos, etc to follow Discussions block`,
      coverImgUrl: null,
      status: {
        userName: 'SmartStylez',
        userImageUrl: '',
        updateTime: '16 hours ago',
        replies: 5,
      },
    },
    {
      title: `Removing "score up and down" option for Discussion Posts block`,
      coverImgUrl: null,
      status: {
        userName: 'SmartStylez',
        userImageUrl: '',
        updateTime: '16 hours ago',
        replies: 5,
      },
    },
    {
      title: `Browse by Label`,
      coverImgUrl: null,
      status: {
        userName: 'SmartStylez',
        userImageUrl: '',
        updateTime: '16 hours ago',
        replies: 5,
      },
    },
    {
      title: `How to have a discussion list that is specific for each space/group (not to include other discussions elsewhere in the site)`,
      coverImgUrl: null,
      status: {
        userName: 'SmartStylez',
        userImageUrl: '',
        updateTime: '16 hours ago',
        replies: 5,
      },
    },
  ]

  return (
    <>
      {/* search area*/}
      <div className="flex gap-2 text-slate-600">
        <div className="p-2 px-3 border rounded-md border-slate-300 bg-white w-[150px]">
          <span className=" inline-block font-semibold">Updated</span>
        </div>
        <div className="p-2 px-3 border rounded-md border-slate-300 bg-white w-[150px]">
          <span className=" inline-block font-semibold">Any status</span>
        </div>
        <div className="p-2 px-3 border rounded-md border-slate-300 bg-white grow">
          <span className=" inline-block font-semibold">Search...</span>
        </div>
      </div>

      {/* therad list area*/}
      <div className="text-slate-600">
        <ul className="list-none">
          {threads.map((item, idx) => {
            return (
              <li key={idx} className="flex rounded hover:bg-white">
                <Link className="grow px-3 py-4" href={'/thread'}>
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <div className="flex flex-wrap items-center">
                        <h2 className="inline-block text-lg mr-6 font-semibold">
                          {item.title}
                        </h2>
                        <span className="inline-block">
                          <GroupImages />
                        </span>
                      </div>

                      <ThreadStatus
                        userName={item.status.userName}
                        userImageUrl={item.status.userImageUrl}
                        updateTime={item.status.updateTime}
                        replies={item.status.replies}
                      />
                    </div>
                    {item.coverImgUrl && (
                      <div className="flex items-center">
                        <Image
                          width={114}
                          height={64}
                          alt=""
                          src={item.coverImgUrl}
                          className="rounded-md"
                        />
                      </div>
                    )}
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
