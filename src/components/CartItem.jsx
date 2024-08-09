import React from 'react';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed from Cart");
  };

  // Function to truncate description to 100 characters
  const truncateDescription = (description) => {
    return description.length > 100 ? description.slice(0, 100) + '...' : description;
  };

  return (
    <div className="flex items-center justify-between p-4 bg-[#93785B] rounded-lg shadow-md mb-4 h-auto"> {/* Set height to auto */}
      <Link to={`/product/${item.id}`} className="flex items-center space-x-4 flex-1"> 
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-28 h-28 object-cover rounded-md" 
        />
        <div className="flex flex-col justify-between h-full">
          <h1 className="text-lg font-semibold text-[#3E3C2E]">{item.title}</h1>
          <p className="text-sm font-semibold text-[#3E3C2E]">{truncateDescription(item.description)}</p>
          <p className="text-md font-bold text-[#865D36]">${item.price}</p>
        </div>
      </Link>
      <div
        className="cursor-pointer flex items-center justify-center bg-[#865D36] text-white rounded-full w-14 h-10 hover:bg-[#AC8968] transition"
        onClick={removeFromCart}
      >
        <MdDelete className="text-xl" />
      </div>
    </div>
  );
};

export default CartItem;
