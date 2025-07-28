
import ReactDOM from "react-dom/client";
import { createBrowserRouter,  Outlet,  RouterProvider } from "react-router";
import Login from "./Login";
import Browse from "./Browse"
import MovieInfo from "./MovieInfo";


const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/movieinfo/:id",
      element: <MovieInfo/>
    }
  ]);

 return(
        <div>
       <RouterProvider router={appRouter}/>
         </div>
    )  
};



export default Body;











