import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-center mt-8">
      {/* Top blue bar */}
      <div className="bg-brand-blue text-white py-4">
        <div className="container mx-auto flex justify-center sm:justify-around items-center flex-wrap text-sm gap-x-4 gap-y-2">
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Terms and Condition</a>
          <a href="#" className="hover:underline">Reschedule Appointment</a>
          <a href="#" className="hover:underline">Refund and Returns Policy</a>
        </div>
      </div>
      {/* Bottom links */}
      <div className="py-6">
        <div className="container mx-auto flex justify-center items-center space-x-8 text-sm text-gray-700">
          <a href="#" className="hover:underline">Contact Information</a>
          <a href="#" className="hover:underline">Home</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
