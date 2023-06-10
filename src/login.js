
import './App.css';
import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
/*import {app} from './firebaseConfig'*/
import {app} from './firebaseConfig';
import {useEffect,useState} from 'react'
import {getAuth,signInWithEmailAndPassword,signOut,onAuthStateChanged,sendPasswordResetEmail} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
//import {collection, addDoc} from 'firebase/firestore'

export default function Login(){
  let auth=getAuth()
 const navigate=useNavigate()
  const [data, setData]=useState({
    email:'',
    password:''
  })
//  const collectionRef=collection(database, 'users')
const handleInput=(event)=>{
  let newInput={[event.target.name]:event.target.value};
   setData({...data,...newInput})
}
const handleSubmit=()=>{
  signInWithEmailAndPassword(auth,data.email,data.password)
  .then((auth)=>{
     navigate('home')
   })
   .catch((err)=>{
    alert(err.message)
   })
  }
 
  useEffect(()=>{
    
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log( 'User is signed in, see docs for a list of available properties')
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  },[])

  //reset password
  function reset(){
    console.log("loading...",data.email)
    sendPasswordResetEmail(auth, data.email)
    .then(() => {
      // Password reset email sent!
      alert('password has been sent to email');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      // ..
    });
  }


     //sign out
     function signout(){
      signOut(auth).then(() => {
        alert('Sign-out')
      }).catch((error) => {
        // An error happened.
        console.log(error)
      });
     }
   const myStyle={
    fontWeight:'400',
    fontSize:'20px'
   }
   const secbtn={
  backgroundColor: '#4CAF50',
  color:'white',
  padding: '10px 20px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  marginRight: '10px'
   }
  return(
   <div className='form'>
   <div className='icon'> 
    <LockOutlinedIcon size='large' />
    <h1 >Login</h1>
    </div>
    <input 
    name='email'
    type='email'
    required
    placeholder='Email'
    value={data.email}
    onChange={(event)=>handleInput(event)}
    />
    <input
     name='password'
     type='password'
     required
     pattern='.{7,}'
     placeholder='Password'
     value={data.password}
     onChange={(event)=>handleInput(event)}
    /><br></br>
    <div className='container'>
     <button className='btn' onClick={handleSubmit}>login</button>
     <button onClick={signout} style={secbtn} className='secbtn'>Logout</button>
     <button onClick={reset} className='reset'>reset</button>
     </div>
   <p style={myStyle}>Dont have an account ?<Link to="signUp"><span >signUp</span></Link></p>
   </div>
  )
}
