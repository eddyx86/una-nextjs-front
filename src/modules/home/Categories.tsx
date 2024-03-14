import Icon from '../../global/Icon'

export default function HomeCategories() {
  const items = [
    {
      icon: '📦',
      name: 'Installation',
      count: 418,
    },
    {
      icon: '🌐',
      name: 'Localisation',
      count: 74,
    },
    {
      icon: '🎛️',
      name: 'Configuration',
      count: 1781,
    },
    {
      icon: '🚫',
      name: 'Administration',
      count: 261,
    },
    {
      icon: '🔍',
      name: 'Troubleshooting ',
      count: 3071,
    },
    {
      icon: '💻',
      name: 'Development',
      count: 686,
    },
    {
      icon: '🛫',
      name: 'Alpha Beta RC',
      count: 176,
    },
    {
      icon: '💡',
      name: 'Suggestions',
      count: 847,
    },
    {
      icon: '👍',
      name: 'Feedback',
      count: 271,
    },
    {
      icon: '💬',
      name: 'General',
      count: 1396,
    },
  ]

  return (
    <>
      <ul className=" flex flex-col gap-2 list-none text-slate-600">
        <li className="flex justify-between items-center border rounded-md bg-gray-200 py-2 pl-3 pr-5">
          <span>
            <i className=" inline-block mr-3">
              <Icon name="swatch-book" className="w-4 h-4 text-slate-500" />
            </i>
            <span className=" inline-block font-semibold">All Categories</span>
          </span>
          <span className="text-xs font-semibold"> 8981 </span>
        </li>

        {items.map((item, index) => {
          return (
            <li
              key={index}
              className="flex justify-between items-center cursor-pointer rounded-md hover:bg-gray-200 py-2 pl-3 pr-5"
            >
              <span>
                <span className=" inline-block mr-3">{item.icon}</span>
                <span className=" inline-block font-semibold">
                  {' '}
                  {item.name}
                </span>
              </span>
              <span className="text-xs rounded-full inline-block py-0.5 px-2 bg-gray-200 font-semibold">
                {item.count}
              </span>
            </li>
          )
        })}

        <li className="flex justify-between items-center cursor-pointer rounded-md hover:bg-gray-200 py-2 pl-3 pr-5">
          <span>
            <i className=" inline-block mr-3">
              <Icon name="chevron-up" className="w-4 h-4 text-slate-500" />
            </i>
            <span className=" inline-block font-semibold">SHOW LESS</span>
          </span>
          <span className="text-xs font-semibold"> &nbsp; </span>
        </li>
      </ul>
    </>
  )
}
