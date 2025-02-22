import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <section className="w-full bg-blue-600 py-4 px-5 flex items-center justify-between shadow-md">
      <div className="text-white text-2xl font-bold">
        <Link to='/' className='hover:text-gray-300 transition'>QUICK</Link>
      </div>
      <div className="relative w-1/3">
        <input 
          type="text" 
          placeholder='Search...' 
          className="w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>
      <div className="text-white text-lg cursor-pointer hover:text-gray-300 transition">
        Login / SignUp
      </div>
    </section>
  );
};

export default TopBar;
