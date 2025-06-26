import { React,useRef,useState } from "react";
import Header from "./Header";
import validateCredentials from "../utils/validate";




const Login = () => { 

    const[isSignIn, setSignIn] = useState(true);
    const[errorMsg, setErrorMsg] = useState("");
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignIn = () => {
     
        console.log("clicked")
        setSignIn(!isSignIn);

    }

    const validateHandler = () => {

        const message = validateCredentials(email.current.value, password.current.value);
        console.log(message);
        setErrorMsg(message);

    }

    return(

        <div>
        <Header/>
        <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_medium.jpg"
        alt="netflix-bg-img"/>
        </div>
        <form onClick={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
         <h1 className="text-2xl font-bold py-2 mx-4">{ isSignIn ? "Sign In" : "Sign Up"}</h1>
         {!isSignIn &&  <input type="text" placeholder="Full Name" className="p-4 m-4 w-full bg-slate-700"/> }
         <input type="text" ref={email} placeholder="Email" className="p-4 m-4 w-full bg-slate-700"/>
         <input type="text" ref={password} placeholder="Password" className="p-4 m-4 w-full bg-slate-700"/>
          {!isSignIn &&  <input type="text" placeholder="Phone Number" className="p-4 m-4 w-full bg-slate-700"/> }
         <button className="bg-red-800 font-bold p-4 m-4 w-full rounded-lg" onClick={validateHandler}>{isSignIn ? "Sign In" : "Sign Up"}</button>  
         <p>{errorMsg && <span className="">{errorMsg}</span>}</p>
         <p className="py-4 mx-4 cursor-pointer" onClick={toggleSignIn}>New to Netflix ? Sign Up Now</p> 
        </form>
        </div>
    )
}


export default Login;







