import React from 'react';
import { Logo, Input, Button } from './index';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

function Signup() {
  return (
    <div className="flex items-center justify-between w-full h-screen overflow-hidden">
      {/* Left Section with Logo */}
      <div className="hidden md:flex md:flex-col md:flex-wrap items-center justify-center w-1/2 h-screen bg-gray-100 text-black p-8">
        <Logo
          imageSrc="../src/assets/logoCC.png"
          altText="Conceptual Classes Logo"
          className="h-32 md:h-48 lg:h-56"
        />
        <h2 className="mt-6 text-2xl md:text-3xl font-extrabold text-center">Welcome to ConceptualClasses</h2>
        <p className="mt-4 text-lg md:text-xl text-center px-8">
          Sign up to access our resources and classes.
        </p>
      </div>


      {/* Right Section with Form */}
      <div className="flex flex-col justify-center w-full md:w-1/2 h-full p-8 md:p-16 bg-white">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Create your account</h2>
        <form className="space-5">
          <Input label="Full Name" placeholder="Enter your full name" type="text" />
          <Input label="Email" placeholder="Enter your email" type="email" />
          <Input label="Password" placeholder="Enter your password" type="password" />
          <Input label="School" placeholder="Enter your school" type="text" />

          <Button type="submit" className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
            Sign Up
          </Button>
          {/* OR Divider */}
          <div className="flex items-center my-2">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="px-4 text-sm text-gray-500">OR</span>
            <hr className="flex-grow border border-gray-300" />
          </div>

          {/* Google Sign In Button */}
          <Button
            type="button"
            bgColor="bg-white"
            textColor="text-gray-900"
            className="w-full flex items-center justify-center border border-gray-300 shadow-lg hover:bg-gray-100 transition duration-200 ease-in-out"

          >
            <FontAwesomeIcon icon={faGoogle} className="mr-2" />
            Continue with Google
          </Button>

        </form>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
