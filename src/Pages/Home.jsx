import React, { useContext } from "react";
import Nav from "../Components/Nav";
import banner1 from "../assets/banner-1.jpg";
import banner2 from "../assets/banner-2.jpg";
import Carousel from "../Components/carousel.component";
import { dummydata } from "../srore";
import Categories from "../Categories";
import Cart from "../Components/Cart";
import { dataContext } from "../Context/UserContext";
import All from "../assets/All.png";
import { RxCross2 } from "react-icons/rx";
import Cart2 from "../Components/Cart2";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { ToastContainer, toast } from 'react-toastify';
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import Wishlist from "../Components/Wishlist";

const Home = () => {
  const slides = [
    <img
      key={1}
      src={banner1}
      className="w-full h-full object-cover"
      alt="Banner 1"
    />, 
    <img
      key={2}
      src={banner2}
      className="w-full h-full object-cover"
      alt="Banner 2"
    />,
  ];

  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);
  
  function filter(category) {
    if (category === "All Products") {
      setCate(dummydata);
    } else {
      let newList = dummydata.filter((item) => item.category === category);
      setCate(newList);
    }
  }

  let items = useSelector((state) => state.cart);
  let subtotal = items.reduce((total, item) => total + item.price * item.qty, 0);
  let deliveryFee = 20;
  let taxes = (subtotal * 0.5) / 100;
  let total = Math.floor(subtotal + deliveryFee + taxes);

  return (
    <div className="w-full min-h-screen">
      <Nav />
      {!input ? (
        <>
          <div className="w-full bg-gray-100">
            <div className="w-[95%] m-auto py-10">
              <Carousel autoslide={true}>{slides}</Carousel>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-5 w-full pt-7">
            {Categories.map((item) => (
              <div
                key={item.id}
                className="w-[160px] h-[210px] bg-white flex flex-col justify-start items-center p-5 gap-3 text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-amber-100 cursor-pointer transition-all duration-200"
                onClick={() => filter(item.name)}
              >
                <img src={item.image} className="w-[100px] h-[100px] object-contain" alt={item.name} />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </>
      ) : null}

      <div className="flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
        {cate.length > 1 ? (
          cate.map((item) => (
            <Cart
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              category={item.category}
            />
          ))
        ) : (
          <div className=" text-center text-2xl pt-6 text-orange-500 font-semibold">
            No Product Found
          </div>
        )}
      </div>

      <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 overflow-auto ${showCart ? "translate-x-0" : "translate-x-full"}`}>
        <header className="w-[100%] flex justify-between items-center">
          <span className="text-[18px] font-semibold">Order Items</span>
          <RxCross2 className="w-[30px] h-[30px] cursor-pointer hover:text-gray-600" onClick={() => setShowCart(false)} />
        </header>
        {items.length > 0 ? (
          <>
            <div className="w-full mt-9 flex flex-col gap-8">
              {items.map((item) => (
                <Cart2 key={item.id} name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
              ))}
            </div>
            <div className="w-full border-t-2 border-gray-400 mt-7 flex flex-col gap-2 p-8">
              <div className="w-full flex justify-between items-center">
                <span className="text-lg text-gray-600 font-semibold">Subtotal</span>
                <span className="font-semibold text-md">Rs {subtotal}/-</span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-lg text-gray-600 font-semibold">Delivery Fee</span>
                <span className="font-semibold text-md">Rs {deliveryFee}/-</span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-lg text-gray-600 font-semibold">Taxes (0.5%)</span>
                <span className="font-semibold text-md">Rs {taxes}/-</span>
              </div>
              <div className="w-full flex justify-between border-t-2 border-gray-400 pt-4">
                <span className="text-2xl text-gray-600 font-bold">Total</span>
                <span className="text-xl font-bold">Rs {total.toFixed(2)}</span>
              </div>
              <button className="w-[80%] mt-5 p-3 bg-orange-500 rounded-lg text-white hover:bg-orange-400 transition-all flex justify-center item mx-auto" onClick={() => toast.success("Order Placed..")}>Place Order</button>
            </div>
          </>
        ) : (
          <div className="text-center text-2xl font-semibold pt-7">Empty Cart</div>
        )}
      </div>

      <div className="w-full bg-gray-100">
        <div className="w-[95%] m-auto py-10">
          <NewsLetter />
        </div>
      </div>
      
      <div className="w-full bg-white pt-8">
        <div className="w-[85%] m-auto py-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
