/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const SingleProducts=({shoe})=>{

  const {id,title,brand,description,price,img_url}=shoe;
    return (
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <h3 className="text-xl font-semibold">{brand}</h3>
    <h3 className="text-xl font-semibold">{price}</h3>
     <p>{description}</p>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">
        <Link to={`/products/${id}`}>See Details</Link></button>
    </div>
  </div>
</div>
    );
}

export default SingleProducts;