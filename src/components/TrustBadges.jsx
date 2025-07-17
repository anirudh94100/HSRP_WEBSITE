import React from 'react';

const partners = [
  { name: 'ROSMERTA', url: 'https://bookhsrplates.com/wp-content/uploads/2021/05/rosmerta-technologies.png' },
  { name: 'AASTA', url: 'https://bookhsrplates.com/wp-content/uploads/2021/05/aasta.png' },
  { name: 'sensorise', url: 'https://bookhsrplates.com/wp-content/uploads/2021/05/sensorise.png' },
  { name: 'ROSMERTA RECYCLING', url: 'https://bookhsrplates.com/wp-content/uploads/2021/05/rosmerta-recycling.png' },
  { name: 'Rosblu', url: 'https://bookhsrplates.com/wp-content/uploads/2021/05/rosblu.png' },
];

const TrustBadges = () => {
  return (
    <div className="py-8 mt-8 border-t">
      <div className="container mx-auto">
        <div className="flex justify-around items-center flex-wrap gap-x-8 gap-y-4">
          {partners.map((partner) => (
            <img key={partner.name} src={partner.url} alt={partner.name} className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
