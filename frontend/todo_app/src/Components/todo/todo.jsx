import React from 'react'
import "./todo.css"
import { useEffect } from 'react';
import { useState } from 'react';
import { TodoCards } from './TodoCards';

export const Todo = () => {
  const[input , setinput] = useState({title : null, body : null });
  const [Array, setArray] = useState([]);
  const show = () =>{
    document.getElementById("textarea").style.display = "block";
  };
    
  const change = (e) => {
    const { name , value} = e.target;
    
    setinput({ ...input , [name] : value});

  };

  const submit = () => {
    setArray([...Array, input]);
    setinput({title : '', body : ''});
  }
  console.log(Array);
  return (
    <div className='Todo'>       
      <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
        <div className="d-flex flex-column todo-inputs-div w-lg-50 w-100 p-1">
        <input
            type="text"
            placeholder={input.title ? input.title : "TITLE"}
            className="my-2 p-2 todo-inputs"
            name="title"
            onClick={show}
            value={input.title}
            onChange={change}
        />
        <textarea
            id="textarea"
            type="text"
            placeholder={input.body ? input.body : "BODY"}
            name="body"
            className=" p-2 todo-inputs"
            onChange={change}
            value={input.body}
        />

          </div>
          <div className=" w-50 w-100 d-flex justify-content-end my-3">
            <button className="home-btn px-2 py-1" onClick={submit}>
              Add
            </button>
          </div>
        </div>
        <div className='todo-body'>
          <div className="container-fluid">
            <div className='row'>
            {Array && Array.map((item , index) => 
              <div className='col-ig-3 col-3 mx-5 my-2'>
              <TodoCards title={item.title}  body={item.body}/>
              </div>)}
            </div>
           </div>
        <div className="div-todo-body"></div>
       </div>     
      </div>


  )
}
