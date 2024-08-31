import React from 'react';
import './App.css'
import HomePage from "./Homepage/HomePage"
import LoginPage from './Login/loginPage';
import Register from "./Login/Register";
import { Route, Routes } from 'react-router-dom';
import Marketplace from "./Marketplace/Marketplace";

function App(){
  return(
    <Routes>
     <Route path='/' element={<HomePage/>}/>
     <Route path="/login" element={<LoginPage/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/marketplace" element={<Marketplace/>}/>
    </Routes>
  )
}

export default App;