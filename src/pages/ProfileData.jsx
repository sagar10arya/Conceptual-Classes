import React from 'react';
import ProfileCard from '../components/ProfileCard';

function ProfileData() {
  const profiles = [
    {
      name: "Navneet Joshi",
      role: "Founder",
      image: "https://images.pexels.com/photos/3772711/pexels-photo-3772711.jpeg?auto=compress&cs=tinysrgb&w=600",
      socialLinks: [
        {
          platform: "Facebook",
          tooltip: "Like",
          url: "https://facebook.com",
          icon: "fab fa-facebook",
          color: "blue",
        },
        {
          platform: "Twitter",
          tooltip: "Follow",
          url: "https://twitter.com",
          icon: "fab fa-twitter",
          color: "light-blue",
        },
        {
            platform: "LinkedIn",
            tooltip: "Connect",
            url: "https://linkedin.com",
            icon: "fab fa-linkedin",
            color: "blue",
          },
        {
          platform: "Instagram",
          tooltip: "Follow",
          url: "https://instagram.com",
          icon: "fab fa-instagram",
          color: "purple",
        },
      ],
    },
    {
      name: "Manoj Joshi",
      role: "Co-Founder",
      image: "https://images.pexels.com/photos/29380482/pexels-photo-29380482/free-photo-of-charming-cat-in-a-library-with-stacked-books.jpeg?auto=compress&cs=tinysrgb&w=600",
      socialLinks: [
        {
          platform: "LinkedIn",
          tooltip: "Connect",
          url: "https://linkedin.com",
          icon: "fab fa-linkedin",
          color: "blue",
        },
        {
          platform: "GitHub",
          tooltip: "Star",
          url: "https://github.com",
          icon: "fab fa-github",
          color: "gray",
        },
      ],
    },
    {
      name: "Rishabh Joshi",
      role: "Co-Founder",
      image: "https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&w=600",
      socialLinks: [
        {
          platform: "LinkedIn",
          tooltip: "Connect",
          url: "https://linkedin.com",
          icon: "fab fa-linkedin",
          color: "blue",
        },
        {
          platform: "GitHub",
          tooltip: "Star",
          url: "https://github.com",
          icon: "fab fa-github",
          color: "gray",
        },
      ],
    },
    {
      name: "Sagar Arya",
      role: "Co-Founder",
      image: "https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&w=600",
      socialLinks: [
        {
          platform: "LinkedIn",
          tooltip: "Connect",
          url: "https://linkedin.com",
          icon: "fab fa-linkedin",
          color: "blue",
        },
        {
          platform: "GitHub",
          tooltip: "Star",
          url: "https://github.com",
          icon: "fab fa-github",
          color: "gray",
        },
      ],
    },
  ];

  return (
    <div className="w-full py-10 px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 
       lg:grid-cols-4 gap-6 mx-auto w-full max-w-screen-3xl  text-center items-center place-items-center">
        {profiles.map((data, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden 
            transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <ProfileCard {...data} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileData;
