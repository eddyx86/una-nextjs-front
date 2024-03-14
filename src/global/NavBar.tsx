import UnaLogo from '@/assets/una-logo.svg'
import Icon, { IconType } from '@/global/Icon'
import classNames from 'classnames'
import Link from 'next/link'

const MenuItem = ({
  icon,
  text,
  link,
}: {
  icon: IconType
  text: string
  link?: string
}) => {
  return (
    <Link
      href={link ? link : '/'}
      className="flex items-center h-10 nav-txt px-2"
    >
      <Icon name={icon} className="w-6 h-6 inline-block mr-3" />
      <b className="inline-block font-semibold text-[16px] select-none">
        {text}
      </b>
    </Link>
  )
}

export default function NavBar() {
  return (
    <nav
      className={classNames(
        'z-30 bx-def-z-index-nav fixed top-0 w-full ring-1 ring-gray-300 dark:ring-gray-700 bg-white/95 dark:bg-gray-800/95 backdrop-blur shadow',
        'px-3 md:px-4 lg:px-6 box-border'
      )}
    >
      <div className="flex justify-between h-16">
        <div className="flex items-center gap-x-5">
          <UnaLogo width="120px" height="40px" />
          <ul className="list-none flex gap-x-4">
            <li>
              <MenuItem icon="community" text="Community" />
            </li>
            <li>
              <MenuItem icon="features" text="Features" />
            </li>
            <li>
              <MenuItem icon="pricing" text="Pricing" />
            </li>
            <li>
              <MenuItem icon="market" text="Market" />
            </li>
            <li>
              <MenuItem icon="docs" text="Docs" />
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-x-2.5">
          <Link
            href={'#'}
            className="inline-block rounded-full bg-gray-100 text-gray-600"
          >
            <span className="relative flex items-center justify-center h-8 w-8 md:h-10 md:w-10">
              <Icon name="search" className="h-4 w-4" />
            </span>
          </Link>
          <Link
            href={'#'}
            className="inline-block rounded-full bg-gray-100 text-gray-600"
          >
            <span className="relative flex items-center justify-center h-8 w-8 md:h-10 md:w-10">
              <Icon name="user" className="sys-icon sys-icon-svg h-5 w-5" />
            </span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
