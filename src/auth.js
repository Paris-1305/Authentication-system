import {auth} from './firebaseConfig'

export const doCreateUserWithEmailAndPassword=(email,password)=>
auth.doCreateUserWithEmailAndPassword(email,password)

export const doSignInWithEmailAndPassword=(email,password)=>
auth.doSignInWithEmailAndPassword(email,password)

export const doSignOut=()=>auth.signOut()

export const doPasswordReset=email=>auth.sendPasswordResetEmail(email)

export const doPasswordChange=password=>
auth.currentUser.updatePassword(password);