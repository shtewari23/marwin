import React from 'react';
import './HoverDiv.css'; // You can create this CSS file for styling

const HoverDivs = () => {
  // Data for the hover divs
  const data = [
    {
      id: 1,
      title: 'Free Edit',
      details: 'Free Photo Editing Software Discuss and review popular free photo editing software available online. Provide tips and tutorials on using these tools for basic and advanced photo editing. Highlight features, pros, and cons of each software. Free Text Editing Tools'
    },
    {
      id: 2,
      title: 'Interactive',
      details: 'User Engagement: Interactivity enhances user engagement by allowing users to actively participate and control their experience. This can include features like buttons, sliders, forms, and other elements that respond to user actions'
    },
    {
      id: 3,
      title: 'Easy Interface',
      details: '"Easy Interface" refers to a user interface design that prioritizes simplicity, intuitiveness, and user-friendliness to ensure a smooth and effortless user experience. The goal of an easy interface is to reduce complexity, minimize the learning curve, and enable users to interact with a system or application with ease.',
    },
    {
      id: 4,
      title: 'Compare to Other',
      details: 'Consistent Design Patterns: Consistency in design elements, such as buttons, icons, and color schemes, ensures a uniform look and feel throughout the interface. This consistency aids users in understanding how different parts of the system work.',
    },
  ];

  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-40">
      {/* Title for the hover divs */}
      <h1 className='mt-8 mb-8 text-4xl font-bold font-sans text-black' id='features'>Features</h1>

      {/* Container for the hover divs */}
      <div className="flex flex-wrap justify-start gap-8">
        {/* Map through the data to create individual hover divs */}
        {data.map((item) => (
          <div key={item.id} className="hover-div transform sm:mt-8 p-4 h-96 w-60 border-2 border-black rounded-xl">
            {/* Title of the hover div */}
            <h2 className="text-xl text-white bg-black border-solid border-2 border-black rounded-2xl pl-4 pt-1 mt-4 p-2">{item.title}</h2>
            
            {/* Content of the hover div */}
            <div className="content absolute left-0 bottom-0 w-full mt-24 p-4 bg-black bg-opacity-70 text-white opacity-0 hover:opacity-100 rounded-b-xl">
              <p className="details text-sm">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(HoverDivs);
