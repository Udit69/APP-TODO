import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import { Home } from './Components/Home/Home';
import  Footer  from './Components/Footer/Footer';
import { Signup } from './Components/signup/Signup';
import { Signin } from './Components/signup/Signin';
import About from './Components/about/About';



import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/todo' element={<About/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
        </Routes>
        
      </Router>
      <Footer/>
      
    </>
  );
}

export default App;
