import React from 'react';

const Header = () => {
  return (
    <header className="bg-white py-4 border-b">
      <div className="container mx-auto flex justify-center items-center space-x-4">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/80px-Emblem_of_India.svg.png" 
          alt="Emblem of India" 
          className="h-16 sm:h-20 w-auto" 
        />
        <div className="text-left">
          <h1 className="text-lg sm:text-xl md:text-3xl font-bold text-black uppercase">
            Ministry of Road Transport and Highways
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
