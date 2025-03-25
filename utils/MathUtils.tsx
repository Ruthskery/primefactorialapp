// Function to check if the number is prime
export const isPrime = (num: number) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  };
  
  // Function to calculate the factorial of a number
  export const factorial = (num: number) => {
    if (num < 0) return "Undefined"; // Factorial is undefined for negative numbers
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact *= i;
    }
    return fact;
  };
  