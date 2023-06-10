import React from 'react'
import {app,database} from './firebaseConfig'
import { Link } from 'react-router-dom'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import {collection, addDoc} from 'firebase/firestore'
import './App.css'

export default function Signup(){
  const auth=getAuth();
  const collectionRef=collection(database, 'users');
    const [formData, setformData]=React.useState({
        username:'',
        email:"",
        password:'' 
    })
   function handleInput(event){
    let newInput={[event.target.name]:event.target.value};
   setformData({...formData,...newInput})
   }
   //target is an event object that gives the html element that triggers the event
   //event is used for html elements while target precise the kind of of html elements 
   function handleSubmit(){
    createUserWithEmailAndPassword(auth,formData.email, formData.password)
  
    .then((response)=>{
     console.log(response.user)
    })
    .catch((error)=>{
     alert(error)
    })
    addDoc(collectionRef,{
      username:formData.username,
      email:formData.email,
      password:formData.password
     })
     .then(()=>{
      alert('sucessful signup')
     })
     .catch((err)=>{
      alert(err.message)
     })
   }
    return(
      <div className='form'>
   <div className='icon'> 
    <h1 >signUp</h1>
    </div>
    <input 
    name='username'
    type='text'
    required
    placeholder='Username'
    value={formData.username}
    onChange={(event)=>handleInput(event)}
    />
    <input 
    name='email'
    type='email'
    required
    placeholder='Email'
    value={formData.email}
    onChange={(event)=>handleInput(event)}
    />
    <input
     name='password'
     type='password'
     required
     pattern='.{7,}'
     placeholder='Password'
     value={formData.password}
     onChange={(event)=>handleInput(event)}
    />
    <br></br>
     <button className='btn' onClick={handleSubmit} >Submit</button>
     <p>Already have an account? <Link to='/'>Login</Link></p>
     </div>
    )
} 

//Name of app=firebase-frontend