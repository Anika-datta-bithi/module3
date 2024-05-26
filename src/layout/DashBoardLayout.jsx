import { Outlet,Link } from "react-router-dom";

const DashBoardLayout=()=>{
    return (
      <div className="grid grid-cols-12 ">
        <div className="col-span-2 bg-gray-300 min-h-screen p-12">
            <ul>
              <li className="border border-black p-4 text w-full">
                <Link to={""}>Dashboard</Link>
              </li>
              <li className="border border-black p-4 text w-full">
                <Link to={"dashboard/products"}>All Products</Link>
              </li>
              <li className="border border-black p-4 text w-full">
                <Link to={"/home"}>Home</Link>
              </li>
            </ul>
        </div>
        <div className="col-span-20 p-20">
    <Outlet/>
        </div>
      </div>
    )
};

export default DashBoardLayout;