import { routerObject, Outlet } from 'react-router-dom'
import React from 'react'
import Home from '../pages/home/index'
import Education from '../pages/education/index'
import Learning from '../pages/education/learning/index'

export const router: Array<routerObject> = [
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
