import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='Home-Page bg-dark text-white contaienr-fluid'>
        <div className='row'>
            <div className='col-lg-6 d-flex justify-content-center align-items-center flex-column' style={{height:"91.5vh"}}>
                <h1>BOOK STORE FOR YOU</h1>
                <Link to ="/books" className='viewBook my-3 button'>View Books</Link>
                 
            </div>
            <div className='col-lg-6 d-flex justify-content-center align-items-center flex-column flex-column' style={{height:"91.5vh"}}>
                Hello
            </div>
        </div>

    </div>
  )
}

export default Home