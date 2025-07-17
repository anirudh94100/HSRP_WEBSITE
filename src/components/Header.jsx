import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ to, children }) => (
  <Link to={to} className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
    {children}
  </Link>
);

const Header = () => {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        {/* Top section with logo */}
        <div className="py-4 flex justify-center items-center">
          <Link to="/" className="inline-block">
            <div className="border-2 border-black rounded-md px-4 py-2">
              <span className="font-bold text-lg tracking-widest">HSRP-PLATE</span>
            </div>
          </Link>
        </div>
        
        {/* Navigation section */}
        <nav className="py-3 flex justify-center items-center flex-wrap gap-x-6 gap-y-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          <NavLink to="/contact-us">Contact us</NavLink>
          <NavLink to="/home-installation">Home Installation</NavLink>
          <NavLink to="/track-order">Track Your Order</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;