import React from 'react';
import AboutImage from './Images/AboutUs.gif'

const AboutUs = () => {
  return (
    <div className="container mx-auto p-8 mt-4 "   >
      <h1 className="text-4xl font-bold mb-8 font-sans  " id='AboutUs'>About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={AboutImage}
            alt="About Us"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        
        <div className="flex flex-col justify-center">
          <p className="text-lg mb-4 font-serif">
            Welcome to AI-PoweredPatterns, where creativity meets technology.
            We are passionate about revolutionizing design with the help of
            artificial intelligence.
          </p>
          <p className="text-lg mb-4 font-serif">
            Our mission is to provide a seamless experience for creators and
            designers by leveraging the power of AI to generate unique and
            inspiring patterns for various use cases.
          </p>
          <p className="text-lg mb-4 font-serif">
            Whether you're a graphic designer, web developer, or anyone
            looking to enhance their projects with stunning patterns, AI-PoweredPatterns
            is here to empower your creativity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AboutUs);
