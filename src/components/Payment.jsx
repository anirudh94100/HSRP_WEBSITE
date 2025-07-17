"use client";

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

const Payment = ({ onPaymentComplete, isLoading }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
        setFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (!file) {
        toast.error("Please upload the payment screenshot.");
        return;
    }
    onPaymentComplete(file);
  };

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
        <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center text-lg">
                <span className="text-gray-700">Amount to Pay:</span>
                <span className="font-bold text-2xl text-gray-900">₹600.00</span>
            </div>
        </div>

        <div className="mb-6 text-left">
            <label htmlFor="screenshot" className="block text-sm font-medium text-gray-700 mb-2">
                Upload Payment Screenshot*
            </label>
            <input 
                type="file" 
                id="screenshot"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-brand-blue file:text-white hover:file:bg-blue-700 cursor-pointer"
            />
             {file && <p className="text-xs text-gray-600 mt-2">Selected file: {file.name}</p>}
        </div>

        <button 
          onClick={handleSubmit} 
          disabled={isLoading}
          className="w-full bg-green-600 text-white font-bold py-3 px-8 rounded-md hover:bg-green-700 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? <Loader2 size={24} className="animate-spin" /> : 'I have paid'}
        </button>
        <p className="text-xs text-gray-500 mt-4">
            Click the button above after you have completed the payment and uploaded a screenshot.
        </p>
      </div>
    </div>
  );
};

export default Payment;