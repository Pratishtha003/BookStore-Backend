import React from 'react'

const AddBooks = () => {
  return (
    <div>
      <div className='bg-dark d-flex-justify-content-center align-items-center' style={{minheight:"91.5vh"}}>
        <div className='container bg-success p-3'>
        <div className="mb-3 container">
        <label for="exampleFormControlInput1" className="form-label text-white">Book name</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>

        <div className="mb-3 container">
        <label for="exampleFormControlInput1" className="form-label text-white">Author</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>

        <div className="mb-3 container">
        <label for="exampleFormControlInput1" className="form-label text-white">Description</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>


        <div className="mb-3 container">
        <label for="exampleFormControlInput1" className="form-label text-white">Image</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>


        <div className="mb-3 container">
        <label for="exampleFormControlInput1" className="form-label text-white">Price</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        

        {/* <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label text-white">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div> */}
      </div>
      <button className=' btn-sucess'>Submit</button>
        </div>
      
    </div>
  )
}

export default AddBooks