import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 p-12">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:flex lg:justify-between lg:space-x-8 gap-10">
        {/* Column 1 */}
        <div className="text-center lg:text-left lg:flex-1">
          <h2 className="text-4xl text-blue-gray-500 font-bold mb-4">
            Conceptual Classes
          </h2>
          <p>
            Dehariya, Mukhani, Haldwani
            <br />
            Nainital, Uttarakhand (263139)
          </p>
          <p>
            Email -{" "}
            <a href="mailto:conceptual.ac.in@gmail.com" className="underline">
              conceptual.ac.in@gmail.com
            </a>
          </p>
          <p>
            © 2025 <span className="font-semibold">Conceptual Classes</span>:
            All rights reserved.
          </p>
          <div className="flex justify-center lg:justify-start mt-4 space-x-4">
            {/* <a
              href="www.facebook.com"
              aria-label="Facebook"
              target="_blank"
              className="hover:text-blue-400"
            >
              <i className="fab fa-facebook-f"></i>
            </a> */}
            {/* <a
              href="www.twitter.com"
              aria-label="Twitter"
              target="_blank"
              className="hover:text-blue-400"
            >
              <i className="fab fa-twitter"></i>
            </a> */}
            <a
              href="www.instagram.com/conceptual_classes_"
              aria-label="Instagram"
              target="_blank"
              className="hover:text-blue-400"
            >
              <i className="fab fa-instagram"></i>
            </a>
            {/* <a
              href="www.linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              className="hover:text-blue-400"
            >
              <i className="fab fa-linkedin"></i>
            </a> */}
            <a
              href="https://www.youtube.com/@conceptualclasses2624"
              aria-label="YouTube"
              target="_blank"
              className="hover:text-blue-400"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="text-center lg:text-left lg:flex-1">
          <h3 className="font-bold mb-4">Pages</h3>
          <ul>
            <li>
              <a href="/" className="hover:underline hover:text-blue-200">
                Home
              </a>
            </li>
            <li>
              <a
                href="/courses"
                className="hover:underline hover:text-blue-200"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="/study-material"
                className="hover:underline hover:text-blue-200"
              >
                Study Material
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="text-center lg:text-left lg:flex-1">
          <h3 className="font-bold mb-4">Company</h3>
          <ul>
            <li>
              <a href="/terms" className="hover:underline hover:text-blue-200">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:underline hover:text-blue-200"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/payment-terms"
                className="hover:underline hover:text-blue-200"
              >
                Payment Terms
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="text-center lg:text-left lg:flex-1">
          <h3 className="font-bold mb-4">Examination Info (Soon)</h3>
          <ul>
            <li>
              {/* <a href="/" className="hover:underline hover:text-blue-200"> */}
                JEE Mains
              {/* </a> */}
            </li>
            <li>
              {/* <a href="#" className="hover:underline hover:text-blue-200"> */}
                JEE Advanced
              {/* </a> */}
            </li>
            <li>
              {/* <a href="#" className="hover:underline hover:text-blue-200"> */}
                NEET
              {/* </a> */}
            </li>
            <li>
              {/* <a href="#" className="hover:underline hover:text-blue-200"> */}
                CUET
              {/* </a> */}
            </li>
            <li>
              {/* <a href="#" className="hover:underline hover:text-blue-200"> */}
                Boards
              {/* </a> */}
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>Conceptual Classes Pvt. Ltd. © 2025 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
