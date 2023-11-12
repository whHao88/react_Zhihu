import React from 'react'
import { HashRouter, useRoutes } from 'react-router-dom'
import { router } from './router'
import './style.css'

interface Props {
  name?: string
}

const App = (Props) => {
  const Routes = () => useRoutes(router) // 使用 useRoutes 来决定渲染哪个子组件

  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  )
}

export default App
