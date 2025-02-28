"use client"; 

import { useEffect, useState } from "react";

const Hero = () => {
  const texts = [
    "Unveiling the Universe’s Secrets...",
    "A New Cosmic Wonder Every Day.",
    "Your Window to the Stars.",
  ];
  
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[index].length) {
      const interval = setInterval(() => {
        setDisplayText((prev) => prev + texts[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);

      return () => clearInterval(interval);
    } else {
      // Wait 2s, then reset for the next text
      const timeout = setTimeout(() => {
        setDisplayText(""); 
        setCharIndex(0);
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, index, texts]);

  return (
    <div className="relative w-full h-full flex items-center justify-center text-center text-white overflow-hidden bg-transparent selection:text-[#A294F9] selection:bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center opacity-40"></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold selection:text-[#A294F9] selection:bg-white">
          Explore the Cosmos, One Picture at a Time.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[#A294F9] min-h-[30px] selection:text-white selection:bg-[#A294F9]">
          {displayText}
        </p>
        <button className="mt-6 px-6 py-3 bg-[#A294F9] hover:bg-[#CDC1FF] text-black font-semibold rounded-lg shadow-lg transition-all duration-300">
          Start Your Journey
        </button>
      </div>
    </div>
  );
};

export default Hero;