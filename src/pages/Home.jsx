import React from 'react';
import { Carousels } from '../components/index.js';
import ExamCardsGrid from './ExamsGridCards.jsx';
import ProfileData from './ProfileData.jsx'
import Testimonials from './Testimonials.jsx';


function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center h-auto bg-gray-50">

      {/* Carousel Section */}
      <section className="relative w-full mt-[80px]">
        <Carousels />
      </section>

    </div>
    
    {/* Courses and details */}
    <div className='w-full h-auto flex flex-wrap flex-col items-center text-center p-6 bg-gray-50'>
        <div className='w-full h-auto flex flex-wrap flex-col items-center'>
          <p className='text-indigo-800 text-3xl font-bold md:text-4xl text-center'>"Courses we offer"</p>
          <div className='w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4'></div>
        </div>
        
        <div className='w-full flex flex-wrap justify-evenly bg-white'>
          <ExamCardsGrid /> 
        </div>
         
    </div>

    {/* Profile Card of Founders */}
    <div className='w-full h-auto flex flex-wrap flex-col items-center text-center p-6 bg-gray-50'>
        <div className='w-full h-auto flex flex-wrap flex-col items-center'>
          <p className='text-indigo-800 text-3xl font-bold md:text-4xl text-center'>"Founders"</p>
          <div className='w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4'></div>
        </div>
        
        <div className='w-full flex flex-wrap justify-evenly mt-4 mb-4'>
           <ProfileData />
        </div>
         
    </div>

    {/* Testimonials */}
    <div className='w-full h-auto flex flex-wrap flex-col items-center text-center p-6 bg-gray-50'>
        <div className='w-full h-auto flex flex-wrap flex-col items-center'>
          <p className='text-indigo-800 text-3xl font-bold md:text-4xl text-center'>"What our Students Say"</p>
          <div className='w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4'></div>
        </div>
    </div>
    <Testimonials />

    </>
  );
}

export default Home;
