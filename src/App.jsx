import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen'; // Import the SplashScreen component

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#3E3C2E] text-[#A69080]">
      {loading ? ( // Show splash screen while loading
        <SplashScreen />
      ) : (
        <>
          <Navbar />
          <div className="container mx-auto py-20 flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
