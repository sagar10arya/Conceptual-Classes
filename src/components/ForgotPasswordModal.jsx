// ForgotPasswordModal.jsx
import React, { useState, useEffect } from "react";

const ForgotPasswordModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // State to store success or error message
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if form is submitted

  // Reset message when modal opens
  useEffect(() => {
    if (isOpen) {
      setMessage(""); // Reset the message when modal is opened
      setIsSubmitted(false); // Reset submission status
    }
  }, [isOpen]);

  // for testing registered emails
  const registeredUsers = ["sagar@yahoo.com", "sv@hotmail.com"]

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user exists
    if (registeredUsers.includes(email)) {
      setIsSubmitted(true);
      setMessage("A password reset link has been sent to your email.");
    } else {
      setIsSubmitted(true);
      setMessage("Sorry, no account found with that email.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {!isSubmitted ? (
          <>
            <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
            <p className="mb-4">Enter your email address to reset your password.</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md mb-4"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  className="text-gray-500"
                  onClick={onClose} // Close modal on Cancel
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        ) : (
          // Success or error message after submission
          <div className="text-center">
            <h2 className={`text-xl font-bold ${message.includes("Sorry") ? "text-red-600" : "text-green-600"}`}>
              {message.includes("Sorry") ? "Error" : "Success"}!
            </h2>
            <p className="mb-4">{message}</p>
            <button
              onClick={onClose} // Close modal after success message
              className="bg-blue-500 text-white px-6 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
