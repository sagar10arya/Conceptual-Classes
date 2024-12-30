import React from 'react';
import { Logo, Input, Button } from './index';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import ForgotPasswordModal from './ForgotPasswordModal';
import { useState } from 'react';

function Login() {
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleOpenModal = () => setIsModalOpen(true); // Open the modal
  const handleCloseModal = () => setIsModalOpen(false); // Close the modal
    return (
        <div className="flex items-center justify-center w-full h-screen">
            {/* Left Section with Logo */}
            <div className="hidden md:flex md:flex-col md:flex-wrap items-center justify-center w-1/2 h-screen bg-gray-100 text-black p-8">
            <Logo
                imageSrc="../src/assets/logoCC.png"
                altText="Conceptual Classes Logo"
                className="h-32 md:h-48 lg:h-56"
            />
                <h2 className="mt-6 text-2xl md:text-3xl font-extrabold text-center">Welcome Back, We Missed You!</h2>
                <p className="mt-4 text-lg md:text-xl text-center px-8">Sign in and dive right back into your personalized dashboard.</p>
            </div>

            {/* Right Section with Form */}
            <div className="flex flex-col justify-center w-full md:w-1/2 h-full p-8 md:p-16 bg-white">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Sign in to your account</h2>
                <form className="space-y-5">
                    <Input
                        label="Email "
                        placeholder="Enter your email"
                        type="email"
                    />

                    <Input
                        label="Password "
                        placeholder="Enter your password"
                        type="password"
                    />

                    {/* Forgot Password Link */}
          <div className="text-right">
            <button
              type="button"
              onClick={handleOpenModal}
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Sign In
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

                <p className="mt-6 text-center text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
                </p>
            </div>

            {/* Forgot Password Modal */}
      <ForgotPasswordModal isOpen={isModalOpen} onClose={handleCloseModal} />
      
        </div>
    );
}

export default Login;
