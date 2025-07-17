"use client";

import React from 'react';

const UserDetails = ({ onNext }) => {
  return (
    <div className="bg-cyan-100 rounded-xl p-6 sm:p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">User Details</h2>
        <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" id="name" className="w-full p-3 bg-white border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
                    <input type="email" id="email" className="w-full p-3 bg-white border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone no <span className="text-red-500">*</span>
                    </label>
                    <input type="tel" id="phone" className="w-full p-3 bg-white border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" />
                </div>
                <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Delivery Address <span className="text-red-500">*</span>
                    </label>
                    <input type="text" id="address" className="w-full p-3 bg-white border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" />
                </div>
            </div>
            <div className="mt-10 flex justify-start">
                <button onClick={onNext} className="bg-gray-700 text-white font-semibold py-3 px-12 rounded-lg hover:bg-gray-800 transition-colors">
                    Next
                </button>
            </div>
        </div>
    </div>
  );
};

export default UserDetails;