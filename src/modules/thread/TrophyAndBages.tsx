import GroupImages from '@/global/GroupImages'
import Icon from '@/global/Icon'

export default function TrophyAndBages() {
  return (
    <>
      <ul className="flex flex-wrap justify-center items-center gap-4 list-none text-sm text-slate-500">
        <li className="flex gap-2">
          <span className="relative flex items-center justify-center ring-1  h-6 w-6 rounded-full ring-white dark:ring-gray-700 bg-gray-200 dark:bg-gray-700">
            <Icon name="trophy" className="w-4 h-4 text-orange-500" />
          </span>
          <b className=" font-semibold text-sm text-slate-500">Premium</b>
        </li>
        <li className="flex gap-2">
          <GroupImages /> <span>{15} friends</span>
        </li>
      </ul>
      <ul className="flex flex-wrap justify-center items-center gap-4 list-none text-sm text-slate-500">
        <li className="flex gap-2">
          <GroupImages /> <span>{21} folowers</span>
        </li>
        <li className="flex gap-2">{1447} views</li>
      </ul>
    </>
  )
}
