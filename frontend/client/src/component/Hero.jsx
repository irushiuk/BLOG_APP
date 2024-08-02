import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='relative w-full h-screen'>
      {/* <div  className="absolute inset-0 w-full h-full">
      <iframe
       src="https://www.youtube.com/embed/kcfs1-ryKWE?si=Xuv54Rnj4v_PdJTe" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      //  referrerpolicy="strict-origin-when-cross-origin" 
       allowfullscreen
       className="absolute top-0 left-0 w-full h-full object cover"
       style={{pointerEvents: 'none'}}>

       </iframe>
      </div> */}
      <img 
        src='https://media.istockphoto.com/id/1971796553/photo/young-couple-is-standing-at-mountain-top-with-great-view.webp?b=1&s=170667a&w=0&k=20&c=a0ufY8XkMlzNvMpY9Ct90ad3lhjJ0nHOFmC-aB4F53Q='
        alt="heroImg" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold">EXPLORE. DISCOVER. SHARE.</h1>
        <p className="text-lg md:text-2xl mt-4">Discover amazing places with us</p>
        <Link to="/login">
        <button className="mt-8 px-6 py-3 outline text-white hover:outline-orange-200 rounded-full">
          Get Started
        </button>
        </Link>
        
      </div>
    </div>
  );
};

export default Hero;
