import React from 'react'
import { HeaderGlobal } from '../header/headerGlobal'
import { LoginForm } from '../LoginUser/LoginForm'
import { Footer } from '../footer'

export const LayoutLogin = () => {
  return (
    <div>
        <HeaderGlobal/>
        <LoginForm/>
        <Footer/>
    </div>
  )
}
