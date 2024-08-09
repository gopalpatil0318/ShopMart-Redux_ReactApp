import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#3E3C2E] text-[#A69080] p-4 fixed bottom-0 left-0 w-full shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <p className="text-lg"> {/* Increased text size */}
          Made by Gopal Patil ❤️.
        </p>
        <div className="flex space-x-4">
          <a 
            href="https://github.com/gopalpatil0318" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#865D36]"
          >
            <FaGithub className="text-xl" />
          </a>
          <a 
            href="https://www.linkedin.com/in/patilgopal0318/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#865D36]"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a 
            href="https://www.instagram.com/gopalpatil._/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#865D36]"
          >
            <FaInstagram className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
