import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login&registration/Login";
import Registration from "../Pages/Login&registration/Registration";
const { createBrowserRouter } = require("react-router-dom");




export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    // errorElement:  ,
    children: [
      {
        path: "/",
        element: <Home/>
      },

      {
        path: "/register",
        element: <Registration/>
      },
      {
        path: "/login",
        element: <Login/>
      },
 
     
     
    ],
  }

]);
