import Image from 'next/image'

export default function GroupImages() {
  const imgsList = [
    { path: '/img/group-1.jpg' },
    { path: '/img/group-2.jpg' },
    { path: '/img/group-3.jpg' },
    { path: '/img/group-4.jpg' },
  ]

  return (
    <ul className="flex list-none relative">
      {imgsList.map((img, idx) => {
        return (
          <>
            <li key={idx} className="" style={{ margin: '-5px' }}>
              <Image
                width={24}
                height={24}
                alt=""
                src={img.path}
                className="inline-block rounded-full"
              />
            </li>
          </>
        )
      })}
    </ul>
  )
}
