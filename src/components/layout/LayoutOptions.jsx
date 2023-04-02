import React from 'react'
import { Footer } from '../footer'
//import { Header } from '../header/header'
import { HeaderGlobal } from '../header/headerGlobal'
import { Options } from '../Options/Options'

export const LayoutOptions = () => {
  return (
    <div>
        <HeaderGlobal/>
        <Options/>
        <Footer/>
    </div>
  )
}
