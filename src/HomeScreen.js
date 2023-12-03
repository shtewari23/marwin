import React from 'react';
import Header from './Header';
import Content from './Content';
import ImageGallery from './ImageGallery';
import AboutUs from './AboutUs';

const HomeScreen = () => {
return(
    <div className='bg-[#F4F6F7]'>

<Header/>
<Content/>
<ImageGallery/>
  </div>
)
}
export default React.memo(HomeScreen);