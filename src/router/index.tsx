import { RouteObject, Outlet } from 'react-router-dom'
import React from 'react'
import Home from '../pages/home/index'
import Education from '../pages/education/index'
import Learning from '../pages/education/learning/index'

interface extraRouter {
  title: string
}

export type ZHRouter = Array<RouteObject & extraRouter>

export const router: ZHRouter = [
  {
    path: '/',
    title: '首页',
    element: <Home />,
    children: [
      {
        path: '',
        element: <div>commandList</div>,
      },
      {
        path: '/follow',
        element: <div>follow</div>,
      },
      {
        path: 'hot',
        element: <div>hot</div>,
      },
      {
        path: '/zvideo',
        element: <div>zvideo</div>,
      },
    ],
  },
  {
    path: '/education',
    title: '教育',
    element: <Education />,
    children: [
      {
        path: 'learning',
        element: <Learning />,
      },
    ],
  },
]
