import React, { useState, useEffect } from 'react';
import "./todo.css";
import { TodoCards } from './TodoCards';
import 'react-toastify/dist/ReactToastify.css';
import { Update } from './update';
import axios from 'axios';

export const Todo = () => {
  const [input, setInput] = useState({ title: '', body: '' });
  const [Array, setArray] = useState([]);
  const id = sessionStorage.getItem("id");
  // State to manage Update component visibility
  const [toUpdateArray, setToUpdateArray] = useState([]); // State to store data for update

  const fetchTasks = async () => { 
    try {
      if (id) {
        const response = await axios.get(`http://localhost:3000/to/findtask/${id}`);
        console.log(response.data.foundList);
        setArray(response.data.foundList); // Assuming response.data.foundList contains the array of tasks
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
      toast.error("Error fetching tasks. Please try again later.");
    }
  };
  

  const show = () => {
    document.getElementById("textarea").style.display = "block";
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submit = async () => {
    try {
      if (!id) {
        toast.error("PLEASE SIGNIN");
      } else {
        if (!input.title || !input.body) {
          toast.error("CANNOT BE EMPTY");
        } else {
          if (id) {
            const response = await axios.post("http://localhost:3000/to/addtodo", { title: input.title, body: input.body , id: id })
            console.log(response);
            fetchTasks(); // Update tasks after adding a new one
          }
          setInput({ title: '', body: '' });
          toast.success("YOUR TASK IS ADDED");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("YOUR TASK IS NOT SAVED ! PLEASE SIGNIN");
    }
  };

  const del = async (cardid) => {
    console.log(cardid);
    await axios.delete(`http://localhost:3000/to/deletetask/${cardid}`, {data: {id: id}})
      .then((response) => { 
        console.log(response);
        fetchTasks(); // Update tasks after deletion
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const update = (value) => {
    setToUpdateArray(Array[value]);
    sessionStorage.setItem('todoid', Array[value]._id);
    console.log("toUpdateArray:", Array[value]); // Access the state directly here
  };

  useEffect(() => {
    fetchTasks();
  }, [id]);

  return (
    <>
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
              {Array && Array.map((item, index) =>
                <div className='col-ig-3 col-3 mx-5 my-2' key={index}>
                  <TodoCards 
                    title={item.title} 
                    body={item.body} 
                    id={item._id} 
                    delid={del}  // Pass toggleUpdateVisibility instead of dis
                    Updateid={index} 
                    tobeupdated={update}
                  />
                </div>)}
            </div>
          </div>
          <div className="div-todo-body"></div>
        </div>
      </div>
      {/* Pass isVisible prop to Update component to control its visibility */}
      <div className="todo-update" id='update-container'>
        <div className='container'>
          <Update toUpdateArray={toUpdateArray} />
        </div>
      </div>
    </>
  )
};
