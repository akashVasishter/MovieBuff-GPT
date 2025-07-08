import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector} from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
const user = useSelector(store => store.user);

    useEffect(() => {

  //onAuthStateChanged is a Event listener gets added to the page whenver header component is loaded    
 const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log("User is signed in:", user);
    const {uid, displayName, email, photoURL} = user;
    dispatch(addUser({uid: uid, displayName: displayName, email: email, photoURL: photoURL}));
    navigate("/browse");
    // ...
  } else {
    // User is signed out
    dispatch(removeUser());
    navigate("/");
  }
});
   //unsubscribe when component unmounts
return () => unsubscribe();
},[]);

const signoutHandler = () => {
    signOut(auth).then(() => {
  // Sign-out successful.

}).catch((error) => {
  // An error happened.
});
    }
    return(
        <div className="absolute w-full px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between">
         <img className="w-44 cursor-pointer" src={NETFLIX_LOGO}
         alt="logo"/>
       
       <div className="flex">
         <img src={user?.photoURL} alt="profile" className="w-12 h-12 rounded-full"/>
         <button onClick={signoutHandler} className="bg-red-500 p-4 cursor-pointer">SignOut</button>
        </div>
        </div>
    )
}
export default Header;








