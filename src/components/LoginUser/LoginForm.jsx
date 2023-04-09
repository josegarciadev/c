import React from 'react'
import { FaEnvelope, FaKey  } from "react-icons/fa";

export const LoginForm = () => {
  return (
    <div>
     <div className=" px-4 py-1 my-4 text-center mt-5 mx-auto">
        <div className='mx-auto title-options mb-5'>
          <h1 className="fs-2 fw-bold justify-content-center ">Welcome back!</h1>
          <h5 className='h6 text-form mx-auto col-8 mb-5'>Our coaches are waiting for you</h5>
        </div>
            
           <form className='container mt-5 pt-5'>
                <div className='row justify-content-center pt-5' >
                    <div className='col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-12'>
                        <div className="input-group mb-3 inputs-style ">
                            <span className="input-group-text bg-transparent border-0" id="basic-addon1">{<FaEnvelope/>}</span>
                            <input type="email" className="form-control bg-transparent border-0" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center mb-5' >
                    <div className='col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-12'>
                        <div className="input-group mb-5 inputs-style ">
                            <span className="input-group-text bg-transparent border-0" id="basic-addon1">{<FaKey/>}</span>
                            <input type="password" className="form-control bg-transparent border-0" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </div>
                
                <div className='row justify-content-center mt-5 pt-5' >
                    <div className='col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-12 mt-5'>
                        <div className='fs-5 btn-create rounded-pill'>
                            <button className='btn text-light fs-5'>
                                    Create account
                            </button>
                        </div>
                        <h6 className='mt-4 mb-2 fs-5 text-muted'>Dont have an account? <a href="" className="text-decoration-none login">Create free account</a></h6>
                    </div>
                </div>
           </form>
        </div>
    </div>
  )
}
