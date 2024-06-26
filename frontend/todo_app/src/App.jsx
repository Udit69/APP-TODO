import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import { Home } from './Components/Home/Home';
import  Footer  from './Components/Footer/Footer';
import { Signup } from './Components/signup/Signup';
import { Signin } from './Components/signup/Signin';
import { Todo } from './Components/todo/todo';
import About from './Components/about/About';
import { useDispatch } from 'react-redux';
import { authActions } from './store';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      dispatch(authActions.login());
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/todo' element={<Todo/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
        </Routes>
      </Router>
      <Footer className="footer"/>
    </div>
  );
}

export default App;

