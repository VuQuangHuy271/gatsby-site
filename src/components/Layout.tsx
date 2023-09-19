import React from 'react'
import { AppHeader } from './AppHeader'
import { NavMenu } from './NavMenu'
import "./Layout.css";
import Login from '../pages/login';

export default function Layout({ children }) {
  const isLoginPage = children.props.path === '/login/';
  return (

    isLoginPage ? <Login /> :
      <div className="App">
        <AppHeader />
        <div className="Content">
          <NavMenu />
          <main style={{ width: '100%', height: '100%' }}>{children}</main>
        </div>
      </div>
  )
}
