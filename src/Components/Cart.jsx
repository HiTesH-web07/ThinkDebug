import React from "react";
import image1 from "../assets/image1.jpg";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";



function Cart({ id,name, image, price, category }) {
   let  dispatch = useDispatch();
  return (
    <div className="w-[300px] h-[420px] bg-white rounded-lg flex flex-col gap-3 shadow-md hover:shadow-xl border border-gray-200 transition-all p-4">
      
      {/* Image Container */}
      <div className="w-full h-[250px] overflow-hidden rounded-lg bg-gray-100 flex justify-center items-center">
        <img src={image} className="w-full h-full object-contain object-center transition-transform duration-300 hover:scale-105" />
      </div>

      {/* Product Name & Category */}
      <div className="text-lg font-semibold text-gray-800">{name}</div>
      <p className="text-sm text-gray-500">{category}</p>

      {/* Price & Wishlist */}
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900">₹ {price}/-</div>
        <button className="flex items-center gap-2 text-gray-600  transition">
          <FaRegHeart className="w-5 h-5 hover:text-red-500" />
          <span className="text-sm font-medium">Wishlist</span>
        </button>
      </div>

      {/* Add to Cart Button */}
      <button className="w-full bg-orange-500 rounded-lg text-white text-lg font-semibold hover:bg-orange-600 transition-all flex justify-center items-center py-2 mt-2" onClick={()=>dispatch(AddItem({id,name,image,price,qty:1}))}>
        <AiOutlineThunderbolt className="w-5 h-5 mr-2"/>
        Add to Cart
      </button>
    </div>
  );
};

export default Cart;