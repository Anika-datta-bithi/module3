import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../layout/DashBoardLayout";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import About from "../pages/About";
export const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        // errorElement:<ErrorPage/>,
        children:[
            {
                index:true,
                 element:<Home/>
            },
            {
                path:"/home",
                 element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
        {
            path:"/login",
            element:<Login/>
        },
        ],

    },
    {
        path:"dashboard",
        element:<DashBoardLayout/>,
        errorElement:<ErrorPage/>,
        children:[{path:"",element:<Dashboard/>}],
    },
]);