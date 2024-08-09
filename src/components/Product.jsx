import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/slices/CartSlice';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success('Item added to cart');
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.success('Item removed from cart');
  };

  return (
    <div className="bg-[#93785B] text-[#3E3C2E] p-4 rounded-lg shadow-lg flex flex-col h-full">
      <Link to={`/product/${post.id}`} className="flex-grow">
        <div className="text-lg font-bold mb-2 line-clamp-2">{post.title}</div>
        <div className="flex justify-center mb-4 flex-grow">
          <div className="w-72 h-72 bg-white rounded-lg overflow-hidden shadow-md">
            <img src={post.image} alt={post.title} className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="text-xl font-semibold mb-2">${post.price}</div>
      </Link>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-sm font-semibold text-[#865D36] mr-2">Rating: {post.rating.rate} </span>
          <span className="text-sm text-gray-500">({post.rating.count})</span>
        </div>
        {cart.some((p) => p.id === post.id) ? (
          <button
            onClick={removeFromCart}
            className="bg-[#865D36] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#3E3C2E] transition"
          >
            Remove Item
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="bg-[#AC8968] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#865D36] transition"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
