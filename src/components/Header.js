import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch} from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

    useEffect(() => {

 onAuthStateChanged(auth, (user) => {
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
         <img className="w-44 cursor-pointer" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
         alt="logo"/>
       
       <div className="flex">
          <img src="{user?.photoURL}" alt="profile" className="w-12 h-12 rounded-full"/>
          <button onClick={signoutHandler} className="bg-red-500 p-4 cursor-pointer">SignOut</button>  
        </div>
        </div>
    )
}
export default Header;








