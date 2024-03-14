import Icon from '@/global/Icon'
import Link from 'next/link'

interface Props {
  category: string
  title: string
}

export default function BreadCrumbs({ category, title }: Props) {
  return (
    <>
      <div className="flex items-center py-6 gap-2 text-slate-600">
        <Icon
          name="comments-outline"
          className="w-[18px] h-[16px] color-purple2 font-semibold"
        />
        <Icon name="chevron-right" className="w-4 h-4 text-slate-600" />
        <Link href={'/'}>{category}</Link>
        <Icon name="chevron-right" className="w-4 h-4 text-slate-600" />
        <span>{title}</span>
      </div>
    </>
  )
}
