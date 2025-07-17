import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ContactUs from './pages/ContactUs';
import HomeInstallation from './pages/HomeInstallation';
import TrackOrder from './pages/TrackOrder';
import FaqPage from './pages/FaqPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import RescheduleAppointmentPage from './pages/RescheduleAppointmentPage';
import RefundPolicyPage from './pages/RefundPolicyPage';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/home-installation" element={<HomeInstallation />} />
            <Route path="/track-order" element={<TrackOrder />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
            <Route path="/reschedule-appointment" element={<RescheduleAppointmentPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;