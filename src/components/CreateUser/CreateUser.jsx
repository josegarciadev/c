import React from 'react';
import { FaRegEnvelope, FaKey, FaPhoneAlt, FaRegUser } from "react-icons/fa";

export const CreateUser = () => {
  return (
    <div>
           <div className=" px-4 py-1 my-4 text-center mt-5 mx-auto">
        <div className='mx-auto title-options'>
          <h1 className="fs-4 fw-bold justify-content-center ">Join Coach Caden’s network of Certified Career Coaches, HR Experts and Employment Law firms today</h1>
          <h5 className='h6 text-form mx-auto col-7 '>Join for free</h5>
        </div>
           <form className='container mt-5'>
                <div className='row justify-content-center' >
                    <div className='col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-12'>
                        <div className="input-group mb-3 inputs-style ">
                            <span className="input-group-text bg-transparent border-0" id="basic-addon1">{<FaRegUser/>}</span>
                            <input type="text" className="form-control bg-transparent border-0" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center' >
                    <div className='col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-12'>
                        <div className="input-group mb-3 inputs-style ">
                            <span className="input-group-text bg-transparent border-0" id="basic-addon1">{<FaRegEnvelope/>}</span>
                            <input type="email" className="form-control bg-transparent border-0" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center' >
                    <div className='col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-12'>
                        <div className="input-group mb-3 inputs-style ">
                            <span className="input-group-text bg-transparent border-0" id="basic-addon1">{<FaPhoneAlt/>}</span>
                            <input type="tel" className="form-control bg-transparent border-0" placeholder="Phone" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center' >
                    <div className='col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-12'>
                        <div className="input-group inputs-style ">
                            <span className="input-group-text bg-transparent border-0" id="basic-addon1">{<FaKey/>}</span>
                            <input type="password" className="form-control bg-transparent border-0" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center mt-4' >
                    <div className='col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-12'>
                        <div className='fs-5 btn-create rounded-pill'>
                            <button className='btn text-light fs-5'>
                                    Create account
                            </button>
                        </div>
                        <h6 className='mt-5 fs-5 text-muted'>Already have account? <a href="" className="text-decoration-none login">Log In</a></h6>
                    </div>
                </div>
           </form>
        </div>
    </div>
  )
}
