import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className=" bg-[#3E3C2E] text-[#A69080] p-4">
      {cart.length > 0 ? (
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row">
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-4">
              {cart.map((item, index) => (
                <CartItem key={item.id} item={item} itemIndex={index} />
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/3 ml-0 md:ml-8 mt-4 md:mt-0">
            <div className="p-6 bg-[#865D36] rounded-lg shadow-lg">
              <div className="text-xl font-bold mb-4">Your Cart Summary</div>
              <div className="flex justify-between items-center mb-4">
                <div className='flex text-lg'>Total Items: <div className="font-semibold text-lg">{cart.length}</div></div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-xl font-bold">Total Amount: ${totalAmount.toFixed(2)}</p>
              </div>
              <button className="mt-4 w-full bg-[#AC8968] text-white text-lg px-4 py-3 rounded-lg shadow-md hover:bg-[#93785B]">
                Check Out Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-2xl font-semibold">Your Cart is Empty</h1>
          <Link to="/">
            <button className="mt-4 bg-[#865D36] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#93785B]">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
