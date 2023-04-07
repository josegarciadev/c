import React from 'react'

export const CreateForm = () => {
  return (
    <div>
      <div className=" px-4 py-1 my-4 text-center mt-5 ms-5">
        <div className='mx-auto title-options'>
          <h1 className="fs-2 fw-bold justify-content-center ">Create new account</h1>
          <h5 className='h6 text-form mx-auto col-7 '>Join for free to gain access to our coaching experts</h5>
        </div>
           <form className='container mt-4'>
                <div className='row justify-content-center' >
                    <div className='col-6'>
                        <input type="text"  className=' inputs-style form-control'/>
                    </div>
                </div>
                <div className='row justify-content-center mt-4' >
                    <div className='col-6'>
                        <input type="text"  className=' inputs-style form-control'/>
                    </div>
                </div>
                <div className='row justify-content-center mt-4' >
                    <div className='col-6'>
                        <input type="text"  className=' inputs-style form-control'/>
                    </div>
                </div>
                <div className='row justify-content-center mt-4' >
                    <div className='col-6'>
                        <input type="text"  className=' inputs-style form-control'/>
                    </div>
                </div>
                <div className='row justify-content-center mt-4' >
                    <div className='col-6'>
                        <input type="text"  className=' inputs-style form-control'/>
                    </div>
                </div>
                <div className='row justify-content-center mt-4' >
                    <div className='col-6'>
                    <select className="form-select inputs-style" aria-label="Default select example">
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                    </select>
                    </div>
                </div>
                <div className='row justify-content-center mt-4' >
                    <div className='col-6'>
                        <div className="mb-3">
                            <label className="form-label mb-3 fs-5 text-start lh-1">Tell us more about your situation and relevant company policies</label>
                            <textarea className="form-control text-area-style" id="exampleFormControlTextarea1" rows="4"></textarea>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center mt-4' >
                    <div className='col-6'>
                        <div className='fs-5 btn-create'>
                            <button className='btn mx-auto text-light fs-5'>
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
