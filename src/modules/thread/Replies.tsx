import Icon from '@/global/Icon'
import UserAvatar from './UserAvatar'

export default function Replies() {
  const list = [
    {
      userName: 'LeoniDS',
      userImgUrl: '/img/userImg02.png',
      updateTime: '11 hours ago',
      content: `
      Hello @Karina !
      <br/>
      From my side, the info about visible secret groups are hidden. By default, if the user may see the other profiles he may see the list of the joined groups under the Groups tab.
      `,
      reply: null,
    },
    {
      userName: 'Karina',
      userImgUrl: undefined,
      updateTime: '12 hours ago',
      content: `
      Hi @LeonidS! Yes you are correct in that the 'info about the secret group is hidden', the description though remains visible through the
      profile card- and then that makes it similar to a Private Group, not Secret as in hidden in the platform from other users.
      I have disabled the Groups Tab because of this Secret group issue. Users who create the secret group would want it hidden from all users.
      `,
      reply: {
        userName: 'LeoniDS',
        userImgUrl: '/img/userImg02.png',
      },
    },
  ]

  return (
    <>
      <ul className="flex flex-col gap-8 list-none text-sm">
        {list.map((item, idx) => {
          return (
            <>
              <li key={idx} className="flex items-start gap-4">
                <div className=" w-10 min-w-10">
                  <UserAvatar name={item.userName} imgUrl={item.userImgUrl} />
                </div>
                <div className="grow">
                  {/* title */}
                  <div className="flex items-center gap-2">
                    <span className=" font-semibold">{item.userName}</span>
                    {item.reply ? (
                      <>
                        <span className="text-gray-400">·</span>
                        <Icon name="reply" className="w-3 h-3" />
                        {' in reply to '}
                        <UserAvatar
                          name={item.reply.userName}
                          imgUrl={item.reply.userImgUrl}
                          small={true}
                        />
                        <span>{item.reply.userName}</span>
                        <span className="text-gray-400">·</span>
                      </>
                    ) : (
                      <>
                        <Icon name="check" className="w-3 h-3" />
                        <span className="text-gray-400">·</span>
                      </>
                    )}
                    <span>{item.updateTime}</span>
                  </div>
                  {/* content */}
                  <div className="flex flex-col gap-4 py-2">
                    {item.content.split('<br/>').map((str, idx) => (
                      <p key={idx}>{str}</p>
                    ))}
                  </div>
                </div>
              </li>
            </>
          )
        })}
      </ul>
    </>
  )
}
