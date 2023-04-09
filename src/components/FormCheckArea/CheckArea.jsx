import React from 'react'

export const CheckArea = () => {
  return (
    <>
        <div className=" py-1 my-4 text-center mx-auto">
            <div className='mx-auto title-options'> 
                <h1 className="fs-4 mx-auto fw-bold mb-2 justify-content-center ">Whats your area of expertise?</h1>
                <h5 className='h6 text-form mx-auto col-7 '> Select all that apply</h5>
            </div>
            <div className='container mt-5'>
                <div className='row justify-content-center mx-auto'>
                      <div className="form-check col-xxl-5 col-xl-5 col-lg-7 col-md-9">
                      <label className="list-group-item d-flex gap-2">
                        <input className="form-check-input flex-shrink-0 border border-secondary" type="checkbox" value="" ></input>
                        <span className='fw-bold text-start'>
                        CAMPUS COACH
                          <span className="d-block text-muted fw-normal">Graduate knowing all of your options</span>
                        </span>
                      </label>
                      </div>
                </div>
                <div className='row justify-content-center mx-auto mt-4'>
                      <div className="form-check col-xxl-5 col-xl-5 col-lg-7 col-md-9">
                      <label className="list-group-item d-flex gap-2">
                        <input className="form-check-input flex-shrink-0 border border-secondary" type="checkbox" value="" ></input>
                        <span className='fw-bold text-start'>
                        JOB SEARCH
                          <span className="d-block text-muted fw-normal">Resume, interviewing & identify your passions</span>
                        </span>
                      </label>
                      </div>
                </div>
                <div className='row justify-content-center mx-auto mt-4'>
                      <div className="form-check col-xxl-5 col-xl-5 col-lg-7 col-md-9">
                      <label className="list-group-item d-flex gap-2">
                        <input className="form-check-input flex-shrink-0 border border-secondary" type="checkbox" value="" ></input>
                        <span className='fw-bold text-start'>
                        GETTING A JOB
                          <span className="d-block text-muted fw-normal">Negotiating an offer, promotion or reviewing a contract</span>
                        </span>
                      </label>
                      </div>
                </div>
                <div className='row justify-content-center mx-auto mt-4'>
                      <div className="form-check col-xxl-5 col-xl-5 col-lg-7 col-md-9">
                      <label className="list-group-item d-flex gap-2">
                        <input className="form-check-input flex-shrink-0 border border-secondary" type="checkbox" value="" ></input>
                        <span className='fw-bold text-start'>
                        LEAVING A JOB
                          <span className="d-block text-muted fw-normal">Voluntarily, involuntarily, understanding rights & severance package</span>
                        </span>
                      </label>
                      </div>
                </div>
                <div className='row justify-content-center mx-auto mt-4'>
                      <div className="form-check col-xxl-5 col-xl-5 col-lg-7 col-md-9">
                      <label className="list-group-item d-flex gap-2">
                        <input className="form-check-input flex-shrink-0 border border-secondary" type="checkbox" value="" ></input>
                        <span className='fw-bold text-start'>
                        EXECUTIVE COACH
                          <span className="d-block text-muted fw-normal">Successfully building a brand, leading a team & having work/life balance</span>
                        </span>
                      </label>
                      </div>
                </div>
                <div className='row justify-content-center mx-auto mt-4'>
                      <div className="form-check col-xxl-5 col-xl-5 col-lg-7 col-md-9">
                      <label className="list-group-item d-flex gap-2">
                        <input className="form-check-input flex-shrink-0 border border-secondary" type="checkbox" value="" ></input>
                        <span className='fw-bold text-start'>
                        STARTING A FAMILY
                          <span className="d-block text-muted fw-normal">Maternity, paternity, adopting and family leave rights</span>
                        </span>
                      </label>
                      </div>
                </div>
                <div className='row justify-content-center mx-auto mt-4'>
                      <div className="form-check col-xxl-5 col-xl-5 col-lg-7 col-md-9">
                      <label className="list-group-item d-flex gap-2">
                        <input className="form-check-input flex-shrink-0 border border-secondary" type="checkbox" value="" ></input>
                        <span className='fw-bold text-start'>
                        WORKPLACE GUIDANCE
                          <span className="d-block text-muted fw-normal">General help or navigating a questionable situation</span>
                        </span>
                      </label>
                      </div>
                </div>
            </div>
        </div>
        
    </>
  )
}
