import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  // Array of links with their corresponding IDs
  const links = [
    { id: 1, text: 'About Us', to: 'AboutUs' },
    { id: 2, text: 'Generator', to: 'Generator' },
    { id: 3, text: 'Contact', to: 'contact' },
    { id: 4, text: 'Services', to: 'features' },
    { id: 5, text: 'FAQ', to: 'contact' },
    { id: 6, text: 'Blog', to: 'features' },
    { id: 7, text: 'Terms', to: 'contact' },
    { id: 8, text: 'Privacy', to: 'contact' },
  ];

  // Function to split links into two columns
  const splitLinks = (arr) => {
    const midIndex = Math.ceil(arr.length / 2);
    const firstColumn = arr.slice(0, midIndex);
    const secondColumn = arr.slice(midIndex);
    return [firstColumn, secondColumn];
  };

  // Split the links into two columns
  const [column1, column2] = splitLinks(links);

  return (
    <div className="font-sans bg-[#F4F6F7] flex">
      {/* Left side containing the logo */}
      <div className="p-4 mt-2 ml-4">
        <div className="flex items-center">
          <h1 className="text-2xl">AIPatrn</h1>
        </div>
      </div>

      {/* Right side containing the navigation links */}
      <div className="flex flex-col p-4 ml-auto mr-96 mt-2">
        <div className="flex">
          {/* First column of links */}
          <ul className="list-none p-0 m-0 mb-4 mr-4">
            {column1.map((link) => (
              <li key={link.id} className="mb-2 text-xl">
                {/* Using Link from 'react-scroll' for smooth scrolling */}
                <Link to={link.to} 
                smooth={true} duration={500}
                className="text-[#888892] hover:text-black cursor-pointer ">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Second column of links */}
          <ul className="list-none p-0 ml-20">
            {column2.map((link) => (
              <li key={link.id} className="mb-2 text-xl">
                {/* Using Link for internal navigation */}
                <Link to={link.to} 
                smooth={true} duration={500}
                className="text-[#888892] hover:text-black cursor-pointer">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Wrap the component export with React.memo
export default React.memo(Header);
