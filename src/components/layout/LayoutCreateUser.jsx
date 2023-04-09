import React from 'react'
import { HeaderGlobal } from '../header/headerGlobal'

import { Footer } from '../footer'
import { CreateUser } from '../CreateUser/CreateUser'

export const LayoutCreateUser = () => {
  return (
    <div>
        <HeaderGlobal/>
        <CreateUser/>
        <Footer/>
    </div>
  )
}
