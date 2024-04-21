import React from 'react';
import "./todo.css";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";



export const TodoCards = ({title , body , id , delid, display}) => {
  return (
    <div className='p-3 todo-card'>
      <div>
        <h5>{title}</h5>
        <p className='todo-card-p'>
          {body}
          </p>
      </div>
      <div className=' d-flex justify-content-around'>
        <div className='d-flex justify-contant-center align-items-center card-icon-head px-2 py-1' onClick={() =>{
          display("block");
        }}>
            <GrUpdate className='card-icons'/>UPDATE
        </div>
        <div className='d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-danger' onClick={() => {
            delid(id);
        }}>         
            <RiDeleteBin6Fill className='card-icons del' />DELETE          
        </div>
      </div>
    </div>
  );
};
