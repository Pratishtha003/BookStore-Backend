import React from 'react'

const BookSection = ({ data }) => {
    console.log(data);
  return (
    // <div>
        <div className='d-flex justify-content-center align-items-center flex-column'>
            {data &&
             data.map((item,index)=>(
              <div className='card'>
                <div>
                  <img style={}
                </div>  
              </div>
          
            <div key={index} className='text-white'>{item.bookname}</div>
            ))}
        </div>
    // </div>
  );
};

export default BookSection;