import React from 'react';
import {useLoaderData} from "react-router-dom";

const ProductsDetails = () => {
    const shoe=useLoaderData();
    const [brand,description,id,image_url,price,title]=shoe;
    return (
        <div>
            <h1 className="text-5xl text-center font-bold">{title}</h1>
           <div className="h-[600px]">
            <img className="h-[600px]" src="image_url" alt="Products" />
            </div>
            <h3 className="text-2xl font-semibold">{price} $$</h3>
            <h3 className="text-xl font-semibold">{brand} </h3>
            <p className="text-lg font-light">{description}</p>
        </div>
    );
};
// Ami 2024 saler December mash theke 2026 sal porjonto 16 ti sonibar o mongolbar upovas theke vogoban honuman er puja 
// diye saradin niramis khabo.13

// Ami 2024 saler July mash theke anantokal porjonto shobsomoy onk besi sukhe shantite thakbo.10
export default ProductsDetails;