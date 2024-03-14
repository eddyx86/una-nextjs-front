'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Layout({
    children
}:{children: React.ReactNode}){

    const pathname = usePathname();

    console.log("router.pathname: " + pathname)

    const isHome = pathname == "/discussion/home";
    const title = isHome ? "Discussions": "Search"

    return (
        <>

      {/* forum title */}
      <div className="pt-16">
        <div className="bx-cover-wrapper relative py-16 text-center">
          <div className="bx-cover-title flex justify-center items-center">
            <div className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              <span className="block pb-1 relative">{title}</span>
              <span className="block pb-1 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500"></span>
            </div>
          </div>
          <div className="bx-cover-actions"></div>
        </div>
      </div>

      {/* tabs - center */}
      <div className="bx-menu-main-bar-wrapper bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 ">
        <div className="bx-menu-main-bar  bx-def-page-width mx-auto px-4 sm:px-6 lg:px-8 box-border">
          <div className="bx-menu-main-bar-cnt relative -mb-px">
            <div className="w-full text-center">
              <ul
                id="bx-menu-main-submenu"
                className="bx-menu-main-submenu bx-menu-object-bx_forum_submenu inline-flex items-stretch w-max"
              >
                <li className={classNames("flex", {"bx-menu-tab-active": isHome} )}>
                    <Link
                       className="group block relative py-4 px-4 text-gray-500
                       hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-200
                       whitespace-nowrap text-sm font-medium text-center hover:bg-transparent focus:z-10 box-sizing"
                    href={"/discussion/home"}>
                        <span className="bx-menu-item-title">Home</span>
                        <span className="bx-mi-underline absolute inset-x-0 bottom-0 h-0.5 group-hover:bg-gray-500 rounded-md"></span>
                    </Link>
                </li>

                <li className={classNames("flex", {"bx-menu-tab-active": !isHome} )}>
                <Link
                        className="group block relative py-4 px-4 text-gray-500
                        hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-200
                        whitespace-nowrap text-sm font-medium text-center hover:bg-transparent focus:z-10 box-sizing"

                    href={"/discussion/search"}>
                            <span className="bx-menu-item-title">Search</span>
                            <span className="bx-mi-underline absolute inset-x-0 bottom-0 h-0.5 group-hover:bg-gray-500 rounded-md"></span>
                    </Link>

                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section>{children}</section>

        </>
    )

}