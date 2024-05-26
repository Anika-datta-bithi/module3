import React from 'react';

const AddProducts = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center">Add a Product </h1>
        <div>
            <form action="">
                <div>
                    <input type="text" name="title" placeholder="Title"/>
                </div>
                <div>
                    <input type="text" name="brand" placeholder="Brand"/>
                </div>
                <div>
                    <input type="number" name="price" placeholder="Price"/>
                </div>
                <div>
                    <input type="text" name="description" placeholder="Description"/>
                </div>
                <div>
                    <input type="text" name="image_url" placeholder="Image_url"/>
                </div>
                <div>
                    <input type="text" name="id" placeholder="ID"/>
                </div>
                
            </form>
        </div>
        
        </div>
    );
};

export default AddProducts;