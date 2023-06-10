import React from 'react'
import Login from './login'
import Signup from './signup'
import Home from './home'
import { BrowserRouter,  Routes, Route} from 'react-router-dom';
//import { Password } from '@mui/icons-material';
//import { PasswordForgot } from './resetPassword';
export default function App(){
  return(
    <BrowserRouter>
    <div>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='home' element={<Home/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}