import React from 'react';
import svg from "../../assets/images/undraw_work_time_re_hdyv.svg"

export const HomeLayout = () => {
  return (
    <div>
        <div>
          anthony
        <div className="col-xxl-12 px-1 py-2">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-12 col-lg-5">
              <img src={svg} alt="imagen" className='img-fluid' />
             <div className="text-img ms-5">
                <p>Choose from 7 Career Milestones to get access to Career Coaches, HR Experts and preferred Employment Law Firm</p>
             </div>
            </div>
            <div className="col-lg-7">
              <h1 className=" mb-3 title-showcase display-1 fw-bold">Take control of your career</h1>
              <h3 className="text-showcase mt-4 display-5">With a coach on your team</h3>
              <p className="text-present h5 text-muted mt-5 mb-5 lh-lg fw-lighter">From finding a fulfilling job - understanding your family leave rights - to negotiating severance packages - Coach Caden is here to empower you to navigate questionable situations in the workplace.</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <ul className="nav nav-pills me-5">
                      <li className="nav-item btn-conect fs-5 "><a href="#" className="nav-link text-light" >Conect with a coach</a></li>
                  </ul>
              </div>
              <p className="text-present mt-5 mb-5 h5 text-muted">Are a Coach, HR Expert or Law Firm? <span className="text-join">o Join our network</span></p>
            </div>
          </div>
        </div>
        </div>

    </div>
  )
}
