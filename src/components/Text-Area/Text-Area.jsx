import React from 'react'
import { useState } from 'react'


export const TextArea = () => {

    const [count, setCount] = useState(0);
    const max = 2000 - count;
  return (
    <div >
        <div className=" py-1 my-4 text-center mt-5 mx-auto">
        <div className='mx-auto title-options row'>
          <h1 className="fs-4 mx-auto fw-bold justify-content-center col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 ">Tell us why you are a fit</h1>
        </div>
           <form className='container mx-auto mt-5'>
                <div className='row justify-content-center mt-4' >
                    <div className=' px-4 col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-10 col-11'>
                        <div className="mb-3">
                            <label className="form-label mb-2 fw-semibold fs-6 text-start ms-auto lh-1">Tell us more about your services and why you d be a valuable member of our network</label>
                            <div id='my-textarea-remaining-chars' className='text-end text-muted' >{max} characters left</div>
                            <textarea 
                            className="form-control border border-dark rounded-4 mt-2" 
                            onChange={e => setCount(e.target.value.length)}
                            maxLength="2000"
                            rows="18">
                                
                            </textarea>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center mt-4' >
                    <div className='col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-10 col-11'>
                        <div className='fs-5 btn-create rounded-pill mb-4'>
                            <button className='btn text-light fs-5 '>
                                    Next
                            </button>
                        </div>
                         <a href="" className="text-decoration-none mt-5 login">Terms & Conditions</a>
                    </div>
                </div>
           </form>
        </div>
    </div>
  )
}
