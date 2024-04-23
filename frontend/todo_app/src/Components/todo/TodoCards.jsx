import React, { useState } from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { Update } from './update';

export const TodoCards = ({ title, body, id, delid , Updateid , tobeupdated}) => {
  const [updateVisible, setUpdateVisible] = useState(false);

  const toggleUpdateVisibility = () => {
    setUpdateVisible(!updateVisible);
  };

  return (
    <div className='p-3 todo-card'>
      <div>
        <h5>{title}</h5>
        <p className='todo-card-p'>{body}</p>
      </div>
      <div className='d-flex justify-content-around'>
        <div className='card-icon-head' onClick={() =>{
          document.getElementById('update-container').style.display = 'block';
          tobeupdated(Updateid);
        }}>
          <GrUpdate className='card-icons'/> UPDATE
        </div>
        <div className='card-icon-head text-danger' onClick={() => delid(id)}>
          <RiDeleteBin6Fill className='card-icons del' /> DELETE
        </div>
      </div>
        <Update />
    </div>
  );
};
