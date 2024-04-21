import React from 'react';
import './todo.css'; // Import CSS file for styling

export const Update = ({ isVisible, toggleVisibility  , display } ) => {

  return (
    <div>
      <div className={`update-container ${isVisible ? 'visible' : ''}`} id='update-container'> 
        <div className='update-content'>
          <h1 className='update-heading'>UPDATE YOUR TASK</h1>
          <input type='text' className='update-input my-4' placeholder='Enter updated title'></input>
          <textarea className='update-textarea my-4' placeholder='Enter updated body'></textarea>
          <div> 
            <button className='update-btn'>UPDATE</button>
            <button className='update-btn' onClick={() =>{
                display("none");
            }}>CLOSE</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};
