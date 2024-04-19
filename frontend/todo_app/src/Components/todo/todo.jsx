import React from 'react'
import "./todo.css"
import { useEffect } from 'react';

export const Todo = () => {
  const show = () =>{
    const textarea = document.getElementById("textarea");
  };
    
  const change = () => {


  };

  return (
    <div className='Todo'>       
      <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
        <div className="d-flex flex-column todo-inputs-div w-lg-50 w-100 p-1">
            <input
              type="text"
              placeholder="TITLE"
              className="my-2 p-2 todo-inputs"
              name="title"
              onClick={show}
              onChange={change}
            />
             <textarea
                id='textarea'
                type='text'
                placeholder='BODY' 
                name='body'
                className='p-2 todo-inputs'
                onChange={change}>
              
             </textarea>
          </div>
          <div className=" w-50 w-100 d-flex justify-content-end my-3">
            <button className="home-btn px-2 py-1" >
              Add
            </button>
          </div>
        </div>
       </div>     


  )
}
