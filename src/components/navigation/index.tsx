import React, { FC } from 'react'
import { Logo } from '../../assets/image/logo'
import { router, ZHRouter } from '@/router'
import { NavLink } from 'react-router-dom'

type Props = {}
interface navProps {
  navs: ZHRouter
}

const NavTab: FC<navProps> = ({ navs }) => (
  <div className="flex mx-6 box-border">
    {navs.map((item) => (
      <NavLink
        key={item.path + '_'}
        to={item.path || '/'}
        className={({ isActive }) =>
          'hover: text-black mx-4 h-full py-3.5 transition-all' +
          (isActive
            ? ' font-extrabold border-b-4 border-blue-600'
            : ' text-gray-400')
        }
      >
        {item.title}
      </NavLink>
    ))}
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
          </div>
        </div>
      </div>
    </div>
  )
}
