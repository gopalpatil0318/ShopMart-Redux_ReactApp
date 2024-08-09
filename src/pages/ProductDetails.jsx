import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/slices/CartSlice';
import { toast } from 'react-hot-toast';

const ProductDetails = () => {
  const { id } = useParams();
  const API_URL = `https://fakestoreapi.com/products/${id}`;
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log("Error in fetching product details", error);
        setProduct(null);
      }
      setLoading(false);
    };

    fetchProductDetails();
  }, [API_URL, id]);

  const addToCart = () => {
    dispatch(add(product));
    toast.success('Item added to cart');
  };

  const removeFromCart = () => {
    dispatch(remove(product.id));
    toast.success('Item removed from cart');
  };

  if (loading) return <Spinner />;
  if (!product) return <div className="text-center">Product not found</div>;

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className=" bg-[#3E3C2E] text-[#A69080] p-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-72 h-96 object-cover rounded-md mb-4 md:mb-0 md:mr-4 shadow-lg" 
        />
        <div className="flex-1 p-4 rounded-md shadow-lg">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-lg text-[#FFD700] mb-2">${product.price}</p> {/* Price color changed */}
          <p className="text-md text-[#D3D3D3] mb-4">{product.description}</p> {/* Description color changed */}
          <div className="text-sm">
            <strong>Category:</strong> {product.category}
          </div>
          <div className="text-sm mb-4 text-[#FFD700]"> {/* Rating color changed */}
            <strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)
          </div>
          <div className="flex justify-between mt-4">
            {isInCart ? (
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
            <button
              onClick={() => navigate(-1)}
              className="bg-[#865D36] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#3E3C2E] transition"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
