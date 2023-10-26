import React from 'react'
import { Routes, Route} from "react-router-dom";
import { Home } from './Home';
import { Register } from './Register';
import { Login } from './Login';
import { AllNotes } from './Course';


const AllRoutes=()=> {
  return (
    <div> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course" element={<AllNotes/>} />
    
      </Routes>
    </div>
  );
}


export {AllRoutes}