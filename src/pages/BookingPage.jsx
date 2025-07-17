"use client";

import React, { useState } from 'react';
import { ArrowLeft, ChevronRight, Phone, Mail } from 'lucide-react';
import toast from 'react-hot-toast';
import ThankYou from '../components/ThankYou';
import UserDetails from '../components/UserDetails';
import Payment from '../components/Payment';

const ProgressStep = ({ number, title, isActive }) => (
  <div className="flex items-center z-10">
    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${isActive ? 'bg-brand-blue text-white' : 'bg-gray-200 text-gray-500'}`}>
      {number}
    </div>
    <div className="ml-3 hidden sm:block">
      <h3 className={`font-semibold transition-colors ${isActive ? 'text-brand-blue' : 'text-gray-500'}`}>{title}</h3>
    </div>
  </div>
);

const BookingPage = ({ onBack }) => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step === 1) {
      toast.success('Thank you for providing your details!');
    }
    if (step < 4) { // 4 stages: Details -> User -> Pay -> Thanks
      setStep(prev => prev + 1);
    }
  };

  const orderDetails = {
    orderNumber: '12345',
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    email: 'customer@example.com',
    total: '₹600.00',
    paymentMethod: 'QR Code UPI'
  };

  const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

  const progressSteps = [
    { number: 1, title: "Booking Details" },
    { number: 2, title: "User Details" },
    { number: 3, title: "Verify & Pay" },
  ];

  const activeStepForProgress = Math.min(step, 3);
  const progressWidth = activeStepForProgress > 1 ? `${((activeStepForProgress - 1) / (progressSteps.length - 1)) * 100}%` : '0%';

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        {step < 4 && (
          <button onClick={onBack} className="flex items-center text-gray-600 hover:text-black font-semibold mb-6 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </button>
        )}

        {/* Progress Bar - hidden on final thank you page */}
        {step < 4 && (
          <div className="flex justify-between items-center mb-10 relative w-full max-w-3xl mx-auto">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 h-0.5 bg-brand-blue -translate-y-1/2 transition-all duration-500" style={{ width: progressWidth }}></div>
            {progressSteps.map(s => (
              <ProgressStep key={s.number} number={s.number} title={s.title} isActive={step >= s.number} />
            ))}
          </div>
        )}

        {step === 1 && (
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">Booking Details</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">Vehicle Registration State*</label>
                    <select id="state" className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue">
                      <option>Select State</option>
                      {states.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="reg-no" className="block text-sm font-medium text-gray-700 mb-1">Registration No.*</label>
                    <input type="text" id="reg-no" placeholder="e.g. DL01AB1234" className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" />
                  </div>
                  <div>
                    <label htmlFor="chassis-no" className="block text-sm font-medium text-gray-700 mb-1">Chassis No.* (Last 5 Digit)</label>
                    <input type="text" id="chassis-no" placeholder="Last 5 Digits" className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" />
                  </div>
                  <div>
                    <label htmlFor="engine-no" className="block text-sm font-medium text-gray-700 mb-1">Engine No.* (Last 5 Digit)</label>
                    <input type="text" id="engine-no" placeholder="Last 5 Digits" className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" />
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button onClick={handleNext} className="bg-brand-blue text-white font-bold py-3 px-8 rounded-md flex items-center gap-2 hover:bg-blue-700 transition-colors transform hover:scale-105">
                    Next <ChevronRight size={20} />
                  </button>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-4">Contact Information</h4>
                <p className="text-gray-600 mb-4">For any query or support, please feel free to contact us.</p>
                <div className="space-y-3">
                  <a href="tel:18001200240" className="flex items-center text-gray-800 hover:text-brand-blue">
                    <Phone size={16} className="mr-3" />
                    <span>1800-1200-240</span>
                  </a>
                  <a href="mailto:online@bookhsrplates.com" className="flex items-center text-gray-800 hover:text-brand-blue">
                    <Mail size={16} className="mr-3" />
                    <span>online@bookhsrplates.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <UserDetails onNext={handleNext} />
        )}

        {step === 3 && (
          <Payment onPaymentComplete={handleNext} />
        )}
        
        {step === 4 && (
          <ThankYou orderDetails={orderDetails} onBackToHome={onBack} />
        )}
      </div>
    </div>
  );
};

export default BookingPage;