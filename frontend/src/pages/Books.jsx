import React from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';
import BookSection from '../components/BookSection';
const Books = () => {
  const [Data,setData] = useState();
  useEffect(()=>{
    const fetch = async () =>{
      try{
        const response = await axios.get("http://localhost:3000/api/v1/getBooks");
        // await axios.get("http://localhost:3000/api/v1/getBooks")
        console.log(response.data.books);
        setData(response.data.books);
      // .then((res) => console.log(res.data.books));
      }
      catch(error){
        console.error("Error fetching books:", error);
      }
    }  
    // };
    fetch();
  },[]);
  return (
    <div className='bg-dark' style={{minheight:"91.5vh"}}>
      <div className='d-flex justify-content-center align-items-center py-3'>
        <h4 className='text-white'>Books Section</h4>
        {Data ? <BookSection data={Data}/>:(<div className='text-white'>Loading....</div>)};
      </div>
    </div>
  )
}

export default Books