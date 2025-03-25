import React, { useState } from "react";
import { isPrime, factorial } from "../utils/MathUtils"; // Import functions

interface PrimeFactorialCheckerProps {
  isNightMode: boolean;
}

const PrimeFactorialChecker: React.FC<PrimeFactorialCheckerProps> = ({ isNightMode }) => {
  const [number, setNumber] = useState<string>(""); // State to hold the user input
  const [result, setResult] = useState<string>(""); // State to display the result

  // Function to handle the button click
  const handleCheck = (): void => {
    const num = parseInt(number);
    if (isNaN(num)) {
      setResult("Please enter a valid number.");
      return;
    }
    const primeCheck = isPrime(num);
    const factorialResult = factorial(num);
    setResult(
      `The number ${num} is ${primeCheck ? "a prime number" : "not a prime number"}. Its factorial is ${factorialResult}.`
    );
  };

  return (
    <div
      className={`flex flex-col items-center p-6 space-y-4 transition-colors ${
        isNightMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Title */}
      <h1 className="text-2xl font-bold">Prime and Factorial Checker</h1>

      {/* Input box for the user to enter a number */}
      <div
        className={`w-full max-w-md p-4 rounded-lg shadow transition-colors ${
          isNightMode ? "bg-gray-800 border-gray-600" : "bg-white border-gray-300"
        }`}
      >
        <input
          type="number"
          placeholder="Enter a number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className={`mb-4 w-full p-2 rounded border transition-colors ${
            isNightMode
              ? "bg-gray-700 text-white placeholder-gray-400 border-gray-500"
              : "bg-white text-black placeholder-gray-500 border-gray-300"
          }`}
        />

        {/* Button to trigger the check */}
        <button
          onClick={handleCheck}
          className={`w-full p-2 rounded transition-colors ${
            isNightMode ? "bg-blue-700 text-white" : "bg-blue-500 text-white"
          }`}
        >
          Check
        </button>
      </div>

      {/* Display the result */}
      {result && (
        <div
          className={`w-full max-w-md p-4 rounded-lg shadow transition-colors ${
            isNightMode ? "bg-gray-800 border-gray-600 text-white" : "bg-blue-50 border-gray-300 text-black"
          }`}
        >
          <p className="text-lg">{result}</p>
        </div>
      )}
    </div>
  );
};

export default PrimeFactorialChecker;
