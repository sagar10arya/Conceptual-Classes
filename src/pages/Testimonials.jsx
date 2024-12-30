import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import testimonials from '../data/testimonialData'

function Testimonials() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-6">
        
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
              {/* Quotation */}
              <div className="relative text-orange-600 text-5xl font-bold">
                <span className="absolute -top-8 left-0">“</span>
                <p className="text-gray-700 italic text-lg mt-4">{testimonial.text}</p>
                <span className="absolute -bottom-8 right-0">”</span>
              </div>

              {/* Profile Picture */}
              <img
                src={testimonial.profilePic}
                alt={testimonial.author}
                className="w-16 h-16 rounded-full mt-8 mx-auto border-2 border-orange-600 shadow-md"
              />

              {/* Author Info */}
              <h3 className="font-bold text-gray-800 mt-4">{testimonial.author}</h3>
              <p className="text-sm text-gray-500">{testimonial.designation}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonials;
