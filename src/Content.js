import React, { useRef } from 'react';
import { Link } from 'react-scroll';

const Content = () => {
  // Create a ref to target a specific div
  const targetDivRef = useRef(null);

  return (
    <div>
      <div className='ml-4 p-4'>
        {/* Subheading */}
        <p className='font-serif text-[#868791] text-lg md:text-xl lg:text-2xl xl:text-3xl'>
          Revolutionize Your
        </p>
        {/* Main heading */}
        <h1 className='font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-4 font-bold tracking-wider'>
          Creative Projects with <br />  the ultimate AI-Powered <br /> Pattern{' '}
          {/* Button with Link */}
          <div className='inline-block h-22 w-72 rounded-full bg-black text-white border border-black p-4 hover:bg-gray-800 text-sm'>
            <Link to={'Generator'} 
            smooth={true} duration={500}
            className="text-white hover:text-black cursor-pointer">
              <span className='uppercase'>
                Start Generating
              </span>
            </Link>
          </div>
          {/* Additional information */}
          <span className='text-lg ml-4 text-[#888892] tracking-wide'>
            The Next generation <br />
            <p className='text-xl'>  <span className='text-black ' >Production </span>for Designers</p>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default React.memo(Content);
