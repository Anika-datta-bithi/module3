import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../layout/DashBoardLayout";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import About from "../pages/About";
import ProductDetails from "../pages/ProductDetails";
export const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        // errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                 element:<Home/>,
                 loader:()=>fetch("http://localhost:3000/shoes"),
            },
            {
               path:"/products/:id",
                 element:<ProductDetails/>,
                 loader:({params})=>fetch(`http://localhost:3000/shoes/${params.id}`),
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
    {
        path:"dashboard",
        element:<DashBoardLayout/>,
        errorElement:<ErrorPage/>,
        children:[{path:"",element:<Dashboard/>}],
    },
    {
        path:"dashboard/add-products",
        element:(<PrivateRoute>
            <AllProducts/>
        </PrivateRoute>)
    },
    {
        path:"dashboard/add-products",
        element:(<PrivateRoute>
            <AddProducts/>
        </PrivateRoute>)
    }
],
    
