import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "/src/index.css";


function Carousels() {
  // Array of achiever objects
  const achievers = [
    {
      imageUrl: "https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Career Advice",
      description: "Build a strong foundation in problem-solving to succeed in any technical field.",
    },
    {
      imageUrl: "https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Exam Strategy",
      description: "Focus on understanding concepts rather than rote memorization.",
    },
    {
      imageUrl: "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Alumni Success",
      description: "Rishabh credits his success to his foundation at Conceptual Classes.",
    },
    
  ];

  return (
    <div className="w-full relative">
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay
        infiniteLoop
        interval={3000}
        stopOnHover
        className="w-full h-[60vh] max-h-screen"
      >
       
        {achievers.map((achiever, index) => (
          <div className="relative" key={index}>
            <img src={achiever.imageUrl} alt={achiever.title} className="w-full h-[60vh] object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">{achiever.title}</h2>
              <p className="text-white text-lg md:text-xl">{achiever.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Carousels;
