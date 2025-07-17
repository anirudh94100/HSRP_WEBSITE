import React from 'react';
import { ArrowLeft, ChevronRight, Phone, Mail } from 'lucide-react';

const ProgressStep = ({ number, title, isActive }) => (
  <div className="flex items-center">
    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg ${isActive ? 'bg-brand-blue text-white' : 'bg-gray-200 text-gray-500'}`}>
      {number}
    </div>
    <div className="ml-3">
      <h3 className={`font-semibold ${isActive ? 'text-brand-blue' : 'text-gray-500'}`}>{title}</h3>
    </div>
  </div>
);

const BookingPage = ({ onBack }) => {
  const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <button onClick={onBack} className="flex items-center text-gray-600 hover:text-black font-semibold mb-6 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </button>

        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">Booking Details</h1>
          
          {/* Progress Bar */}
          <div className="hidden md:flex justify-between items-center mb-10 relative w-full max-w-4xl mx-auto">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 w-0 h-0.5 bg-brand-blue -translate-y-1/2"></div>
            <ProgressStep number="1" title="Booking Details" isActive={true} />
            <ProgressStep number="2" title="Fitment Location" />
            <ProgressStep number="3" title="Appointment Slot" />
            <ProgressStep number="4" title="Booking Summary" />
            <ProgressStep number="5" title="Verify & Pay" />
          </div>

          {/* Form Section */}
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
                <button className="bg-brand-blue text-white font-bold py-3 px-8 rounded-md flex items-center gap-2 hover:bg-blue-700 transition-colors transform hover:scale-105">
                  Next <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Info Box */}
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
      </div>
    </div>
  );
};

export default BookingPage;
