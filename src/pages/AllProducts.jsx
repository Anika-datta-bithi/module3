import React, { useEffect } from 'react';

const AllProducts = () => {
    useEffect(()=>{
  fetch()
  .then((res)=>res.json())
  .then((data)=>setProducts(data));
    },[])
    return (
        <div>
            <h1 className="text-5xl font-bold text-center">All Products</h1>
        <div className="my-16 flex flex-wrap gap-4">
            {
                Products.map((shoe)>{
                    
                })
            }
        </div>
        </div>
    );
};

export default AllProducts;