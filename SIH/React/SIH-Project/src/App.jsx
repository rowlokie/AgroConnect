


import React from 'react';
import './App.css'
import HomePage from "./Homepage/HomePage"
import LoginPage from './Login/loginPage';
import Register from "./Login/Register";
import { Route, Routes } from 'react-router-dom';
import Marketplace from "./MarketPlace/MarketPlace.jsx";
import WeatherPage from './Weather/WeatherPage.jsx';

function App(){
  return(
    <Routes>
     <Route path='/' element={<HomePage/>}/>
     <Route path="/login" element={<LoginPage/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/marketplace" element={<Marketplace/>}/>
     <Route path="/weather" element={<WeatherPage/>}/>
    </Routes>
  )
}

export default App;