import React, { useState } from 'react';
import './todo.css';
import axios from 'axios';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export const Update = () => {
 
  const [sid, setSid] = useState(''); // State to store the _id of the task to be updated
  const [input, setInput] = useState({ title: '', body: '' });
  const [toggle, setToggle] = useState(false); // Define the 'toggle' property

  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

const submit = async () => {
    try {
      const sessionId = sessionStorage.getItem('todoid');
      setSid(sessionId);
    } catch (error) {
      console.error("Error setting session ID:", error);
      return;
    }
  };
  
  useEffect(() => {
    if (sid) {
      try {
        const id = sid.split(' ')[0];
        console.log("Updating task with ID:", id);
        sessionStorage.removeItem("todoid");
        // Use the _id in the URL string for the PUT request
        axios.put(`http://localhost:3000/to/updatetask/${id}`, { title: input.title, body: input.body })
          .then(() => {
            console.log("Task updated successfully!");
            document.getElementById('update-container').style.display = 'none';
            window.location.reload(); 
            setSid('');
          })
          .catch(error => {
            console.error("Error updating task:", error);
          });
      } catch (error) {
        console.error("Error updating task:", error);
      }
    }
  }, [sid]);
  
  
  return (
    <div className={`update-container`} id='update-container'>
      <ToastContainer />
      <div className='update-content'>
        <h1 className='update-heading'>UPDATE YOUR TASK</h1>
        <input
          type='text'
          name='title'
          className='update-input my-4'
          placeholder='Enter updated title'
          value={input.title}
          onChange={change}
        />
        <textarea
          name='body'
          className='update-textarea my-4'
          placeholder='Enter updated body'
          value={input.body}
          onChange={change}
        ></textarea>
        <div>
          <button className='update-btn' onClick={submit}>UPDATE</button>
          <button className='update-btn' onClick={() =>{
            document.getElementById('update-container').style.display = 'none';
          
          }}>CLOSE</button>
        </div>
      </div>
    </div>
  );
};
