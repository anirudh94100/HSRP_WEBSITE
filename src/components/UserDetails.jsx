"use client";

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

const UserDetails = ({ onNext, isLoading }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    delivery_address: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    const { name, phone, delivery_address } = formData;
    if (!name || !phone || !delivery_address) {
        toast.error('Please fill all required fields.');
        return;
    }
    onNext(formData);
  };

  return (
    <div className="bg-cyan-100 rounded-xl p-6 sm:p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">User Details</h2>
        <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full p-3 bg-white border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
                    <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full p-3 bg-white border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone no <span className="text-red-500">*</span>
                    </label>
                    <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 bg-white border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" />
                </div>
                <div>
                    <label htmlFor="delivery_address" className="block text-sm font-medium text-gray-700 mb-1">
                        Delivery Address <span className="text-red-500">*</span>
                    </label>
                    <input type="text" id="delivery_address" value={formData.delivery_address} onChange={handleChange} className="w-full p-3 bg-white border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" />
                </div>
            </div>
            <div className="mt-10 flex justify-start">
                <button onClick={handleSubmit} disabled={isLoading} className="bg-gray-700 text-white font-semibold py-3 px-12 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                    {isLoading ? <Loader2 size={20} className="animate-spin" /> : 'Next'}
                </button>
            </div>
        </div>
    </div>
  );
};

export default UserDetails;