import { Outlet } from "react-router-dom";
import Footer from "../components/Footer"; 
import Navbar from "../components/Navbar";

const MainLayout=()=>{
    return(
        <div>
              <Navbar/>
              <Footer/>
              <Outlet/>
        </div>
    )
};

export default MainLayout;