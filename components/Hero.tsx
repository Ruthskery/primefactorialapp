import React, { useState } from "react";
import PrimeFactorialChecker from "./Primefactorialchecker";

const Hero: React.FC = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors ${
        isNightMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <PrimeFactorialChecker isNightMode={isNightMode} />
        <p className="text-lg mb-6">This is the hero section. It looks great in both day and night modes!</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={toggleNightMode}>
          {isNightMode ? "Switch to Day Mode" : "Switch to Night Mode"}
        </button>
      </div>
    </div>
  );
};

export default Hero;
