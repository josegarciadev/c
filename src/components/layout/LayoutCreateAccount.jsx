import React from 'react';
import { CreateForm } from '../CreateAccount/CreateForm';
import { Footer } from '../footer';
import { HeaderGlobal } from '../header/headerGlobal'
export const LayoutCreateAccount = () => {
  return (
    <div>
      <HeaderGlobal/>
      <CreateForm/>
      <Footer/>
    
    </div>
  )
}
