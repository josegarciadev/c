import React from 'react'
import { FaEnvelope, FaIndustry, FaPhoneAlt, FaUserAlt, FaFlagUsa } from "react-icons/fa";

export const CreateForm = () => {
  return (
    <div>
      <div className=" px-4 py-1 my-4 text-center mt-5 mx-auto">
        <div className='mx-auto title-options'>
          <h1 className="fs-2 fw-bold justify-content-center ">Create new account</h1>
          <h5 className='h6 text-form mx-auto col-7 '>Join for free to gain access to our coaching experts</h5>
        </div>
           <form className='container mt-4'>
                <div className='row justify-content-center' >
                    <div className='col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-12'>
                        <div className="input-group mb-3 inputs-style ">
                            <span className="input-group-text bg-transparent border-0" id="basic-addon1">{<FaUserAlt/>}</span>
                            <input type="text" className="form-control bg-transparent border-0" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center' >
                    <div className='col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-12'>
                        <div className="input-group mb-3 inputs-style ">
                            <span className="input-group-text bg-transparent border-0" id="basic-addon1">{<FaEnvelope/>}</span>
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
                            <span className="input-group-text bg-transparent border-0" id="basic-addon1">{<FaIndustry/>}</span>
                            <input type="text" className="form-control bg-transparent border-0" placeholder="Industry" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center' >
                    <div className='col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-12 mt-3'>
                        <div className="input-group inputs-style ">
                        <span className="input-group-text bg-transparent border-0" id="basic-addon1">{<FaFlagUsa/>}</span>
                        <select className="form-select bg-transparent border-0"  aria-label="Default select example">
                            <option selected>State</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                    </select>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center mt-4' >
                    <div className='col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-12'>
                        <div className="mb-3">
                            <label className="form-label mb-3 fs-5 text-start lh-1">Tell us more about your situation and relevant company policies</label>
                            <textarea className="form-control text-area-style" id="exampleFormControlTextarea1" rows="4"></textarea>
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
