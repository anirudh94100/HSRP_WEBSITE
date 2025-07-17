import React, { useState } from 'react';
import Header from './components/Header';
import ServiceGrid from './components/ServiceGrid';
import TrustBadges from './components/TrustBadges';
import Footer from './components/Footer';
import BookingPage from './pages/BookingPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateToBooking = () => setCurrentPage('booking');
  const navigateToHome = () => setCurrentPage('home');

  if (currentPage === 'booking') {
    return <BookingPage onBack={navigateToHome} />;
  }

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ServiceGrid onBookClick={navigateToBooking} />
        <TrustBadges />
      </main>
      <Footer />
    </div>
  );
}

export default App;
