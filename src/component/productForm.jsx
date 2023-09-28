import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewProduct } from '../redux/product/action';

const ProductForm = () => {
   const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [imgUrl , setImgUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newOrder = {name, category, price, quantity, imgUrl};
        dispatch(addNewProduct(newOrder));
        setName("");
        setCategory("");
        setPrice("");
        setQuantity("");
        setImgUrl("");
    };
    return (
        <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form onSubmit={handleSubmit} className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
          {/* product name */}
          <div className="space-y-2">
            <label htmlFor="lws-inputName">Product Name</label>
            <input value={name} onChange={(e)=> setName(e.target.value)} className="addProductInput" id="lws-inputName" type="text" required />
          </div>
          {/* product category */}
          <div className="space-y-2">
            <label htmlFor="lws-inputCategory">Category</label>
            <input value={category} onChange={(e)=> setCategory(e.target.value)} className="addProductInput" id="lws-inputCategory" type="text" required />
          </div>
          {/* product image url */}
          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input value={imgUrl} onChange={(e)=> setImgUrl(e.target.value)} className="addProductInput" id="lws-inputImage" type="text" required />
          </div>
          {/* price & quantity container */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* price */}
            <div className="space-y-2">
              <label htmlFor="ws-inputPrice">Price</label>
              <input value={price} onChange={(e)=> setPrice(e.target.value)} className="addProductInput" type="number" id="lws-inputPrice" required />
            </div>
            {/* quantity */}
            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input value={quantity} onChange={(e)=> setQuantity(e.target.value)} className="addProductInput" type="number" id="lws-inputQuantity" required />
            </div>
          </div>
          {/* submit button */}
          <button type="submit" id="lws-inputSubmit" className="submit">Add New Product</button>
        </form>
        </div>
    );
}

export default ProductForm;
