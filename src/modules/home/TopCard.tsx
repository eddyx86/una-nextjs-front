import Image from 'next/image'
import Link from 'next/link'
import ThreadStatus from '../../global/ThreadStatus'

interface Props {
  title: string
  description: string
  href: string
  coverImgUrl: string
  userName: string
  userImageUrl?: string
  updateTime: string
  replies: number
}

export default function HomeTopCard({
  title,
  description,
  href,
  coverImgUrl,
  userName,
  userImageUrl,
  updateTime,
  replies,
}: Props) {
  const showCoverImage = coverImgUrl && coverImgUrl.trim() != ''

  return (
    <>
      <Link href={href ? href : '/thread'} className="inline-block">
        <div
          className="flex bg-white rounded"
          style={{
            width: '336px',
            height: '394.5px',
            border: '1px solid #ddd',
            borderRadius: '4px',
          }}
        >
          <div className="flex flex-col justify-between h-full px-1 pt-1">
            <div>
              {/* cover img */}
              {showCoverImage && (
                <div style={{ height: '185px', overflow: 'hidden' }}>
                  <Image
                    width={334}
                    height={185}
                    objectFit="cover"
                    src={coverImgUrl}
                    alt={title}
                  />
                </div>
              )}

              {/* card-title */}
              <div className="py-4 px-4">
                <b className="text-xl text-gray-600 font-semibold">{title}</b>
              </div>

              {/* card-content */}
              {!showCoverImage && (
                <div className="px-4 grow overflow-hidden font-normal text-sm  text-gray-500">
                  <div>{description}</div>
                </div>
              )}
            </div>

            {/* card-footer */}
            <div className="px-4">
              <ThreadStatus
                userName={userName}
                userImageUrl={userImageUrl}
                updateTime={updateTime}
                replies={replies}
              />
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}
