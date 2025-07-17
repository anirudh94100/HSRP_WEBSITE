"use client";

import React from 'react';
import { CheckCircle } from 'lucide-react';

const ThankYou = ({ orderDetails, onBackToHome }) => {
  const { orderNumber, date, email, total, paymentMethod, billingAddress } = orderDetails;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <div className="flex flex-col items-center text-center">
        <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Thank you. Your order has been received.</h1>
      </div>

      <div className="my-8 border-t border-b border-gray-200 py-4">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-600">
          <li className="flex flex-col items-center text-center px-2">
            <span className="font-bold text-gray-800">Order number:</span>
            <span>{orderNumber}</span>
          </li>
          <li className="flex flex-col items-center text-center px-2">
            <span className="font-bold text-gray-800">Date:</span>
            <span>{date}</span>
          </li>
          <li className="flex flex-col items-center text-center px-2">
            <span className="font-bold text-gray-800">Email:</span>
            <span>{email}</span>
          </li>
          <li className="flex flex-col items-center text-center px-2">
            <span className="font-bold text-gray-800">Total:</span>
            <span className="font-bold">{total}</span>
          </li>
          <li className="flex flex-col items-center text-center px-2">
            <span className="font-bold text-gray-800">Payment method:</span>
            <span>{paymentMethod}</span>
          </li>
        </ul>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold text-gray-800 text-center md:text-left">Order details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flow-root">
                <dl className="-my-4 divide-y divide-gray-200 text-sm">
                    <div className="flex items-center justify-between py-4">
                        <dt className="text-gray-600">High Security Registration Plate</dt>
                        <dd className="font-medium text-gray-900">₹600.00</dd>
                    </div>
                     <div className="flex items-center justify-between py-4">
                        <dt className="text-gray-600">Subtotal</dt>
                        <dd className="font-medium text-gray-900">₹600.00</dd>
                    </div>
                     <div className="flex items-center justify-between py-4">
                        <dt className="text-gray-600">Payment Method</dt>
                        <dd className="text-gray-900">{paymentMethod}</dd>
                    </div>
                     <div className="flex items-center justify-between py-4">
                        <dt className="font-bold text-gray-900">Total</dt>
                        <dd className="font-bold text-gray-900">{total}</dd>
                    </div>
                </dl>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2 text-gray-800">Billing address</h3>
              {billingAddress ? (
                <address className="not-italic text-gray-600">
                    {billingAddress.name}<br />
                    {billingAddress.address}<br />
                    {billingAddress.phone}<br />
                    {billingAddress.email}
                </address>
              ) : (
                <p className="text-gray-500">No billing address provided.</p>
              )}
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <button 
          onClick={onBackToHome}
          className="bg-brand-blue text-white font-bold py-3 px-8 rounded-md hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;