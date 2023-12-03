import React, { useState } from 'react';
import Image1 from './Images/image3.png';

const Generator = () => {
  // State to hold the selected image
  const [selectedImage, setSelectedImage] = useState(null);

  // Handler to update the selected image when the input changes
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  // Handler for image submission
  const handleSubmit = () => {
    // Handling image submission logic here
    if (selectedImage) {
      console.log('Selected Image:', selectedImage);
    } else {
      console.log('No image selected');
    }
  };

  return (
    <div
      className="container mx-auto p-8  rounded-lg"
      style={{
        backgroundImage: `url(${Image1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} id= 'Generator'
    >
      <div className="container mx-auto p-6 rounded-lg">
        <h1 className="text-2xl font-serif mb-4 font-bold text-white text-center">
          Generate image data using AI
        </h1>
      
        {/* Form for Image Upload */}
        <div className="max-w-md mx-auto bg-white p-8 border rounded-lg shadow-lg h-auto mt-12">
          <label className="block text-sm font-medium text-gray-700">Select an Image:</label>
          {/* Input for image selection */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
          <div className="mt-4">
            {/* Display selected image preview */}
            {selectedImage && (
              <div>
                <p className="text-sm font-medium text-gray-700">Selected Image Preview:</p>
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected Preview"
                  className="mt-2 max-w-full h-auto"
                />
              </div>
            )}
          </div>
          {/* Button to submit the image */}
          <button
            onClick={handleSubmit}
            className="mt-4 bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Upload Image
          </button>
          {/* Display image details if an image is selected */}
          {selectedImage && (
            <div>
              <p className="text-m font-bold text-black font-serif mt" >Image Name: <span className='text-gray-500'>{selectedImage.name}</span></p>
              <p className="text-m font-bold text-black">Image Size: <span className='text-gray-500'></span>{selectedImage.size}<span className='text-gray-500'> bytes</span></p>
              <p className="text-m font-bold text-black">Image Type: <span className='text-gray-500'>{selectedImage.type}</span></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Generator);
