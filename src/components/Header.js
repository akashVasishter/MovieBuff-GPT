import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector} from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
const user = useSelector(store => store.user);
const showGptSearch = useSelector( store => store.gpt.showGptView);

const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

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


   const handleGptView = () => {

    dispatch(toggleGptView());

   }

   const langHandler = (e) => {
    
          dispatch(changeLanguage(e.target.value));
   }

    return(
        <div className="absolute w-full px-8 py-4 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
         <img className="w-44 mx-auto md:mx-0 cursor-pointer" src={NETFLIX_LOGO}
         alt="logo"/>
       
      {user && ( 
        <div className="flex justify-between ">
         {
           showGptSearch && <select className="px-4 py-2 mx-4 my-2 bg-gray-500 text-white" onChange={langHandler}>
          {SUPPORTED_LANGUAGES.map((lang) => ( <option key={lang.identifier} value={lang.identifier}>{lang.name}</option> ))}  
          </select>
         } 
        <button onClick={handleGptView} className="px-4 py-2 mx-4 my-2 bg-purple-800 text-white rounded-lg">{ showGptSearch ? "Homepage" : "GPT Search"}</button>
         <button onClick={handleSignOut} className="bg-red-500 px-4 py-2 mx-4 my-2 cursor-pointer">SignOut</button>
        </div>
        )}
        </div>
    )
}
export default Header;








