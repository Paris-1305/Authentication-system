import React from 'react'
import {auth} from './firebaseConfig'
import {useAuthState} from 'react-firebase-hooks/auth'
//import {getAuth, signOut} from 'firebase/auth'



export default function Home (){
    const [user, loading, error]=useAuthState(auth);

const button={
      backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    fontSize:'16px',
    borderRadius:'5px'
}
const styles={
   position:'absolute',
   left:'350px',
   display:'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
    return(
        <>
        <div>
        <h1 style={styles}>Welcome {user?.email} you have sucessfully Login</h1><br/>
        <button onClick={()=>auth.signOut()} style={button} >signOut</button>
        </div>
        </>
     )
}
