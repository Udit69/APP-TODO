import React from 'react';
import "./todo.css";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";



export const TodoCards = ({title , body}) => {
  return (
    <div className='p-3 todo-card'>
      <div>
        <h5>{title}</h5>
        <p className='todo-card-p'>
          {body}
          </p>
      </div>
      <div className=' d-flex justify-content-around'>
        <div className='d-flex justify-contant-center align-items-center card-icon-head px-2 py-1'>
            <GrUpdate className='card-icons'/>
        </div>
        <div className='d-flex justify-contant-center align-items-center card-icon-head px-2 py-1 text-danger'>
            <RiDeleteBin6Fill className='card-icons del' />
            
        </div>
      </div>
    </div>
  );
};
