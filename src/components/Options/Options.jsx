import React from 'react'
import { Cards } from './Cards'

export const Options = () => {
  return (
    <>
    <div className="px-4 py-1 my-5 text-center">
        <h1 className="fs-1 fw-bold mb-4">Choose from the options below</h1>
        <div className='container'>
        <div className='row justify-content-center'>
            <Cards/>
        </div>
    </div>
    </div>
  
    </>

  )
}
