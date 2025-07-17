import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceGrid from '../components/ServiceGrid';
import TrustBadges from '../components/TrustBadges';

const HomePage = () => {
  const navigate = useNavigate();
  const navigateToBooking = () => navigate('/booking');

  return (
    <main className="container mx-auto px-4 py-8">
      <ServiceGrid onBookClick={navigateToBooking} />
      <TrustBadges />
    </main>
  );
};

export default HomePage;