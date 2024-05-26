import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const shoe=useLoaderData();
    console.log(shoe);
    return (
        <div>
           <h1 className="text-5xl text-center font-bold">{}</h1> 
       <img src={""} alt="product image" />
       <h3 className="text-2xl font-semibold">{}$$s</h3>
       <h3 className="text-xl font-semibold">{}$$s</h3>
       <p className="text-lg font-light">{}</p>
        </div>
    );
};

export default ProductDetails;