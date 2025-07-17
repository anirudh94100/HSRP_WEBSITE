import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-8">
      {/* Top blue bar */}
      <div className="bg-brand-blue text-white py-4">
        <div className="container mx-auto px-4 flex justify-center sm:justify-around items-center flex-wrap text-sm gap-x-6 gap-y-2">
          <Link to="/faq" className="hover:underline">FAQ</Link>
          <Link to="/terms-and-conditions" className="hover:underline">Terms and Condition</Link>
          <Link to="/reschedule-appointment" className="hover:underline">Reschedule Appointment</Link>
          <Link to="/refund-policy" className="hover:underline">Refund and Returns Policy</Link>
        </div>
      </div>
      
      {/* Bottom section */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">Contact Information</h3>
            <ul className="list-disc list-inside">
              <li>
                <span className="text-gray-700">Email: </span>
                <a href="mailto:info@bookhsrplates.com" className="text-gray-700 hover:text-brand-blue hover:underline">
                  info@bookhsrplates.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <ul className="space-y-2">
                <li><Link to="/" className="text-gray-700 hover:text-brand-blue hover:underline">Home</Link></li>
                <li><Link to="/privacy-policy" className="text-gray-700 hover:text-brand-blue hover:underline">Privacy Policy</Link></li>
                <li><Link to="/contact-us" className="text-gray-700 hover:text-brand-blue hover:underline">Contact us</Link></li>
                <li><Link to="/home-installation" className="text-gray-700 hover:text-brand-blue hover:underline">Home Installation</Link></li>
                <li><Link to="/track-order" className="text-gray-700 hover:text-brand-blue hover:underline">Track Your Order</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;