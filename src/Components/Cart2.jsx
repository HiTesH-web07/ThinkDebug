import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/cartSlice';

const Cart2 = ({ name, id, price, image, qty }) => {
  let dispatch=useDispatch()
  return (
    <div>
      <div className='w-full h-[120px] p-2 shadow-lg flex justify-between items-center'>
        <div className='w-[60%] h-full flex gap-3 shadow-lg'>
          <div className='w-[60%] h-full overflow-hidden rounded-lg'>
            <img src={image} alt="" className='w-full h-full object-contain object-center'/>
          </div>
          <div className='w-[40%] h-full flex flex-col justify-center'>
            <div className='text-gray-600 font-semibold text-sm md:text-base 
              truncate max-w-[120px] md:max-w-[180px] leading-5'>
              {name}
            </div>
            <div className='w-[110px] h-[40px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-semibold 
              border-2 border-orange-400 text-xl mt-2'>
              <button className='w-[30%] h-full bg-white flex justify-center items-center text-orange-500 hover:bg-gray-200'onClick={()=>{qty>1?dispatch(DecrementQty(id)):1}}>-</button>
              <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center'>{qty}</span>
              <button className='w-[30%] h-full bg-white flex justify-center items-center text-orange-500 hover:bg-gray-200'
                onClick={()=>{dispatch(IncrementQty(id))}}>+</button>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-start items-end gap-4'>
          <span className='text-xl font-semibold'>Rs {price}/-</span>
          <RiDeleteBin6Line className='w-[30px] h-[30px] text-red-400 cursor-pointer'onClick={()=>dispatch(RemoveItem(id))} />
        </div>
      </div>
    </div>
  )
}

export default Cart2;
