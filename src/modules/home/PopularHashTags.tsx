import Icon from '../../global/Icon'

export default function HomePolularHashTags() {
  const items = [
    {
      name: 'UNA Platform',
      count: 2970,
    },
    {
      name: 'UNA Community',
      count: 787,
    },
    {
      name: 'Community',
      count: 408,
    },
    {
      name: 'Development',
      count: 404,
    },
    {
      name: 'Learn',
      count: 129,
    },
    {
      name: 'BoonEx Dolphin',
      count: 77,
    },
    {
      name: 'Market',
      count: 70,
    },
    {
      name: 'Cloud',
      count: 22,
    },
    {
      name: 'LIVE',
      count: 16,
    },
    {
      name: 'bx',
      count: 9,
    },
  ]

  return (
    <>
      <div className="px-2 py-1 border border-slate-300 rounded-md bg-white shadow">
        <h2 className="p-4 pt-2 text-xl font-bold text-slate-900">
          Popular HashTags
        </h2>
        <ul className=" flex flex-col gap-2 list-none text-slate-600">
          {items.map((item, index) => {
            return (
              <li
                key={index}
                className="flex justify-between items-center cursor-pointer rounded-md hover:bg-gray-100 py-2 pl-3 pr-5"
              >
                <span>
                  <span className=" inline-block mr-3">
                    <Icon name="hashtag" className="w-4 h-4 text-slate-500" />
                  </span>
                  <span className=" inline-block font-semibold">
                    {' '}
                    {item.name}
                  </span>
                </span>
                <span className="text-xs rounded-full inline-block py-0.5 px-2 bg-gray-100 font-semibold">
                  {item.count}
                </span>
              </li>
            )
          })}

          <li className="flex justify-between items-center cursor-pointer rounded-md hover:bg-gray-100 py-2 pl-3 pr-5">
            <span>
              <i className=" inline-block mr-3">
                <Icon name="chevron-down" className="w-4 h-4 text-slate-500" />
              </i>
              <span className=" inline-block font-semibold">SHOW MORE</span>
            </span>
            <span className="text-xs font-semibold"> &nbsp; </span>
          </li>
        </ul>
      </div>
    </>
  )
}
