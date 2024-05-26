import { useLoaderData } from "react-router-dom";
import Accordian from "../components/home/Accordian";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";


const Home= ()=>{
    const data=useLoaderData();
    console.log(data);
    return (
        <div>
            <Banner/>
            <Accordian/>
            <Products data={data}/>
         
        </div>
    )
}

export default Home;