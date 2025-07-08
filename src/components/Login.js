import { React,useRef,useState } from "react";
import validateCredentials from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router";
import Header from "./Header";
import { NETFLIX_BG_IMG, USER_AVATAR } from "../utils/constants";

// This component handles user login and registration
const Login = () => { 

    const[isSignIn, setSignIn] = useState(true);
    const[errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
   
    const toggleSignIn = () => {    
        // Toggle between Sign In and Sign Up
        setSignIn(!isSignIn);
    }

    const validateHandler = () => {

        const message = validateCredentials(email.current.value, password.current.value);
        console.log(message);
        setErrorMsg(message);
        if(message) return;

        if(!isSignIn){
        //SignUp Logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
       .then((userCredential) => {
    // Signed up 
      const user = userCredential.user;
      console.log(user);


      updateProfile(user, {
  displayName: name.current.value, photoURL: {USER_AVATAR}
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorCode +"-"+ errorMessage);
  });      
     }
      else {
            //SignIn Logic
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorCode +"-"+ errorMessage);
  });
        }
    }
    return(
        <div>
        <Header/>
        <div className="absolute">
        <img src={NETFLIX_BG_IMG}
        alt="netflix-bg-img"/>
        </div>
        <form onClick={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
         <h1 className="text-2xl font-bold py-2 mx-4">{ isSignIn ? "Sign In" : "Sign Up"}</h1>
         {!isSignIn &&  <input type="text" ref={name} placeholder="Full Name" className="p-4 m-4 w-full bg-slate-700"/> }
         <input type="text" ref={email} placeholder="Email" className="p-4 m-4 w-full bg-slate-700"/>
         <input type="password" ref={password} placeholder="Password" className="p-4 m-4 w-full bg-slate-700"/>
         <button className="bg-red-800 font-bold p-4 m-4 w-full rounded-lg" onClick={validateHandler}>{isSignIn ? "Sign In" : "Sign Up"}</button>  
         <p>{errorMsg && <span className="mx-2 px-2 font-bold text-lg text-red-700">{errorMsg}</span>}</p>
         <p className="py-4 mx-4 cursor-pointer" onClick={toggleSignIn}>New to Netflix ? Sign Up Now</p> 
        </form>
        </div>
    )
}

export default Login;







