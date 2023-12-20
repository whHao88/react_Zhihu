import React, { FC } from 'react'
import { Logo } from '../../assets/image/logo'
import { router, ZHRouter } from '@/router'
import { NavLink } from 'react-router-dom'
import { BellIcon } from '@heroicons/react/24/outline'

type Props = {}
interface navProps {
  navs: ZHRouter
}
type NavLinkRenderProps = {
  isActive: boolean
  isPending: boolean
  isTransitioning: boolean
}

const getNavClass = ({ isActive }: NavLinkRenderProps) => {
  return (
    'hover: text-black mx-4 h-full py-3.5 transition-all' +
    (isActive ? ' font-extrabold border-b-4 border-blue-600' : ' text-gray-400')
  )
}
const NavTab: FC<navProps> = ({ navs }) => (
  <div className="flex mx-6 box-border">
    {navs.map((item) => (
      <NavLink
        key={item.path + '_'}
        to={item.path || '/'}
        className={getNavClass}
      >
        {item.title}
      </NavLink>
    ))}
  </div>
)

const SearchTab = () => (
  <div className="flex">
    <input
      type="text"
      placeholder="北京租房app"
      className=" w-96 h-8 border border-gray-100 rounded-full bg-gray-50 px-4"
    />
    <button className=" w-16 h-8 mx-4 text-sm items-center flex justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300">
      提问
    </button>
  </div>
)

const MenuIcons = () => (
  <div className=" mx-4 flex items-center justify-normal mr-10 gap-4">
    <div className=" flex flex-col mx-4 justify-center items-center">
      <BellIcon className="w-5 h-5 text-gray-500 fill-gray-500" />
      <span className=" text-xs text-gray-500">消息</span>
    </div>
    <div className=" flex flex-col mx-4 justify-center items-center">
      <BellIcon className="w-5 h-5 text-gray-500 fill-gray-500" />
      <span className=" text-xs text-gray-500">私信</span>
    </div>
  </div>
)

export default function Navigation({}: Props) {
  return (
    <div className=" bg-white shadow-lg w-screen">
      <div className=" max-w-6xl mx-auto my-0 flex justify-center w-full">
        <div className=" h-14 flex justify-between items-center min-w-max w-full">
          <div className="flex items-center">
            <Logo />
            <NavTab navs={router} />
            <SearchTab />
            <MenuIcons />
          </div>
        </div>
      </div>
    </div>
  )
}
