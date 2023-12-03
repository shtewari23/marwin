import React from 'react';
import image2 from './Images/image3.gif';
import image from './Images/image.gif';
import profile1 from './Images/profile1.png';
import profile2 from './Images/profile2.png';
import profile3 from './Images/profile3.png';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import image4 from './Images/image4.gif'
import { Link } from 'react-scroll';

const ImageGallery = () => {
  return (
    <div className="flex flex-wrap">
      {/* First Image */}
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2 h-96 relative">
        <img
          src={image4}
          alt="Image 1"
          className="w-full h-full object-cover rounded-lg"
        />
        {/* Profile Images */}
        <img
          src={profile1}
          alt="Image 2"
          className="absolute inset-0 w-14 h-14 object-cover rounded-lg  top-44 sm:top-44  md:top-40 lg:top-44 xl:top-44 left-6 sm:right-4 md:right-5 lg:right-6"
        />
        <img
          src={profile2}
          alt="Image 3"
          className="absolute inset-0 w-14 h-14 object-cover rounded-lg  top-44 sm:top-44  md:top-40 lg:top-44 xl:top-44 left-16 sm:left-12 md:left-10 lg:left-12"
        />
        <img
          src={profile3}
          alt="Image 4"
          className="absolute inset-0 w-14 h-14 object-cover rounded-lg  top-44 xl:left-20 sm:top-44 md:top-40 lg:top-44 xl:top-44 left-24  sm:left-16 md:left-20 lg:left-18"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col  top-60  xl:top-60 lg:top-60 ml-6 text-white md:top-56"  >
          <p className="text-xl font-serif mb-2 overflow-hidden">Learn from the best mentors</p>
        </div>
        {/* Button */}
        <div className='absolute inset-0 flex flex-col h-12 xl:h-12 sm:h-12 lg:h-14 md:h-14  ml-6 text-white   top-72 w-3/5 rounded-full bg-transparent border border-white p-4 text-sm md:top-72 sm:top-72 sd:top-72 hover:bg-black'  >
          <Link
            to="learning"
            smooth={true} duration={500}
            className="hover:cursor-pointer  hover:text-gray-300"
          >
            <span className='uppercase pb-4  block -mt-3 text-lg  overflow-hidden md:-mt-5 xl:-mt-3 ' >
              Start Learning 
            </span>
          </Link>
        </div>
      </div>

      {/* Second Image */}
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2 h-96 relative">
        <img
          src={image}
          alt="Image 2"
          className="w-full h-full object-cover rounded-lg"
        />
        {/* List Items (Mobile) */}
        <div className='absolute inset-0 ml-4 text-white mt-28'>
          <ul className='h-14 p-8'>
            <li className=' h-14 font-serif text-2xl'>
              <Link to={'features'} 
              smooth={true} duration={500}
              className='hover:cursor-pointer hover:bg-black'>
                Free Edit <SouthEastIcon></SouthEastIcon>
              </Link>
              <hr/>
            </li>
            <li className=' h-14 font-serif text-2xl'>
              <Link to={'features'} 
              smooth={true} duration={500}
              className='hover:cursor-pointer hover:bg-black'>
                Interactive <SouthEastIcon></SouthEastIcon>
              </Link>
              <hr/>
            </li>
            <li className=' h-14 font-serif text-2xl'>
              <Link to={'features'} 
              smooth={true} duration={500}
              className='hover:cursor-pointer hover:bg-black'>
                Easy Interface <SouthEastIcon></SouthEastIcon>
              </Link>
              <hr/>
            </li>
            <li className=' h-14 font-serif text-2xl'>
              <Link to={'features'} 
              smooth={true} duration={500}
              className='hover:cursor-pointer hover:bg-black'>
                Compare to Other<SouthEastIcon></SouthEastIcon>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Third Image */}
      <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-2 h-96 relative">
        <img
          src={image2}
          alt="Image 3"
          className="w-full h-full object-cover rounded-lg"
        />
        {/* Count and Information */}
        <div className='absolute inset-0 ml-12 mt-40 text-white md:mt-52 sm:mt-52 xl:mt-52'>
          <p className=' text-6xl xl:text-8xl '> +20k  </p>
        </div>
        <div className='absolute inset-0 ml-48  mt-40  xl:ml-72 text-white  md:mt-52 sm:mt-52 xl:mt-60' >
          <p className='text-2xl overflow-hidden'> Glass Pattern Generated this <br/>
            <span className='ml-2 text-2xl w-auto overflow-hidden' > week in the first release.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ImageGallery);
