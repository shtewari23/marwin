import React from "react";
import Countdown from 'react-countdown-now';
import FooterImage from './Images/footer.png'
const Footer = () => {
  const initialTime = {
    days: 32,
    hours: 22,
    minutes: 32,
    seconds: 0,
  };

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const targetDate =
      now +
      initialTime.days * 24 * 60 * 60 * 1000 +
      initialTime.hours * 60 * 60 * 1000 +
      initialTime.minutes * 60 * 1000;

    return targetDate - now;
  };

  const Completionist = () => <span>Timer Completed!</span>;

  return (
    <div className="relative  bg-black mt-6" >
      <img src={FooterImage} className="object-cover w-full h-72" alt="footer background" />

  
      <div className="flex justify-center -mt-44  sd:hidden ">
        {/* Timer div */}
        <p className="text-4xl font-bold mb-2 text-white ml-4">
            Next Session <br />
            <span className="font-extrabold">Will Start In</span>
          </p>
        <Countdown
          date={Date.now() + calculateTimeLeft()}
          renderer={({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
              return <Completionist />;
            } else {
              return (

                <div className="flex justify-center space-x-4 lg:space-x-12 md:space-x-2 mr-6    " id='learning'>
                  <div className="rounded-lg bg-gradient-to-b from-purple-600 via-transparent to-purple-600 w-30 h-20   inline-block text-white p-0 m-2 md:m-4">
                    <p className="text-white text-center font-mazzard text-20 font-semibold leading-34 tracking-wider">
                      {days}
                      <br />
                      <span className="text-xs">DAYS</span>
                    </p>
                  </div>
                  <div className="rounded-lg bg-gradient-to-b from-purple-600 via-transparent to-purple-600 w-30 h-20 inline-block text-white p-0 m-2 md:m-4">
                    <p className="text-white text-center font-mazzard text-20 font-semibold leading-34">
                      {hours}
                      <br />
                      <span className="text-xs">HOURS</span>
                    </p>
                  </div>
                  <div className="rounded-lg bg-gradient-to-b from-purple-600 via-transparent to-purple-600 w-30 h-20 inline-block text-white p-0 m-2 md:m-4">
                    <p className="text-white text-center font-mazzard text-20 font-semibold leading-34 ">
                      {minutes}
                      <br />
                      <span className="text-xs">MINUTES</span>
                    </p>
                  </div>
                  <div className="rounded-lg bg-gradient-to-b from-purple-600 via-transparent to-purple-600 w-30 h-20 inline-block text-white p-0 m-2 md:m-4">
                    <p className="text-white text-center font-mazzard text-20 font-semibold leading-34 ">
                      {seconds}
                      <br />
                      <span className="text-xs">SECONDS</span>
                    </p>
                  </div>
                </div>
              );
            }
          }}
        />
        </div>
    

          <p className="text-lg font-bold mb-4 uppercase text-white ml-8" id='contact'>Contact Us</p>
          <p className="text-sm text-white ml-8 pb-8">
            27 MC Lodge,Almora,India <br />
            +91 7307728791
          </p>
        </div>
  );
};

export default React.memo(Footer);
