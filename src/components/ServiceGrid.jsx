import React from 'react';
import { ArrowRight } from 'lucide-react';

const Card = ({ title, bgColor, buttonBg, buttonText, onClick, children }) => (
    <div className={`rounded-lg p-6 flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300 h-full ${bgColor}`}>
        {children ? children : <h2 className="text-xl font-bold text-black">{title}</h2>}
        <button 
            onClick={onClick}
            className={`mt-4 self-start font-bold py-2 px-4 rounded-md flex items-center gap-2 transition-transform transform hover:scale-105 ${buttonBg} ${buttonText}`}
        >
            Book <ArrowRight size={16} />
        </button>
    </div>
);

const ServiceGrid = ({ onBookClick }) => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left large card */}
                <div className="lg:w-1/2">
                    <Card 
                        title="High Security Registration Plate with Color Sticker"
                        bgColor="bg-brand-yellow"
                        buttonBg="bg-white"
                        buttonText="text-black"
                        onClick={onBookClick}
                    />
                </div>
                {/* Right 2x2 grid */}
                <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card 
                        title="Four Wheeler Plate"
                        bgColor="bg-brand-yellow"
                        buttonBg="bg-white"
                        buttonText="text-black"
                        onClick={onBookClick}
                    />
                    <Card 
                        title="Two Wheeler Plate"
                        bgColor="bg-brand-cyan"
                        buttonBg="bg-black"
                        buttonText="text-white"
                        onClick={onBookClick}
                    />
                    <Card 
                        title="Heavy Wheeler Plate"
                        bgColor="bg-brand-cyan"
                        buttonBg="bg-black"
                        buttonText="text-white"
                        onClick={onBookClick}
                    />
                    <Card 
                        title="Only Color Stickers"
                        bgColor="bg-brand-yellow"
                        buttonBg="bg-white"
                        buttonText="text-black"
                        onClick={onBookClick}
                    />
                </div>
            </div>
            {/* Bottom row of cards */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                 <Card bgColor="bg-brand-cyan" buttonBg="bg-black" buttonText="text-white" onClick={onBookClick}>
                    <h2 className="text-xl font-bold text-black">
                        <span className="text-fuchsia-500">Electric</span> Vehicle Number Plate
                    </h2>
                 </Card>
                 <Card 
                    title="Tractor & Trailer Number Plate"
                    bgColor="bg-brand-yellow"
                    buttonBg="bg-white"
                    buttonText="text-black"
                    onClick={onBookClick}
                />
                 <Card 
                    title="Track Your Order & Grivance Redressel"
                    bgColor="bg-brand-cyan"
                    buttonBg="bg-black"
                    buttonText="text-white"
                    onClick={onBookClick}
                />
                 <Card 
                    title="Transport/Replacement Number Plate"
                    bgColor="bg-brand-yellow"
                    buttonBg="bg-white"
                    buttonText="text-black"
                    onClick={onBookClick}
                />
            </div>
        </div>
    );
};

export default ServiceGrid;
