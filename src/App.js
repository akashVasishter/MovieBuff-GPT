import {React} from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Header from "./components/Header";
import Body from "./components/Body";
import Login from "./components/Login";
import Browse from "./components/Browse";

const App = () => {

return(
<div className="app-container">
 <Outlet/>
</div>
)

}

 const appRouter = createBrowserRouter([{

    path:"/",
    element: <Login/>,
    children: [

        {
            path:"/header",
            element:<Header/>
        },
        {
            path:"/Homepage",
            element: <Body/>,
        },
        {
            path: "/Browse",
            element: <Browse/>
        }
    ]
   }]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);









