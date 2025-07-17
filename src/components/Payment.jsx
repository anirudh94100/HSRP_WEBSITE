"use client";

import React from 'react';

const Payment = ({ onPaymentComplete }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Verify & Pay</h2>
      <p className="text-gray-600 mb-8">Please scan the QR code with your payment app to complete the transaction.</p>
      
      <div className="flex justify-center mb-8">
        <img 
          src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=example@upi&pn=SecurePlate&am=600.00&cu=INR&tn=HSRPBooking"
          alt="Payment QR Code"
          className="rounded-lg shadow-md"
        />
      </div>

      <div className="max-w-md mx-auto">
        <div className="bg-gray-100 rounded-lg p-4 mb-8">
            <div className="flex justify-between items-center text-lg">
                <span className="text-gray-700">Amount to Pay:</span>
                <span className="font-bold text-2xl text-gray-900">₹600.00</span>
            </div>
        </div>

        <button 
          onClick={onPaymentComplete} 
          className="w-full bg-green-600 text-white font-bold py-3 px-8 rounded-md hover:bg-green-700 transition-colors text-lg"
        >
          I have paid
        </button>
        <p className="text-xs text-gray-500 mt-4">
            Click the button above after you have completed the payment.
        </p>
      </div>
    </div>
  );
};

export default Payment;