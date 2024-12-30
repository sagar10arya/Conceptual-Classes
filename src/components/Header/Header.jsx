import React, { useState, useEffect } from "react";
import { Container, Logo, LogoutBtn, Badge } from "../index";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state
  const authStatus = useSelector((state) => state.auth.status);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Add scroll listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (slug) => {
    if (location.pathname === slug) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(slug);
    }
    setIsMobileMenuOpen(false); // Close menu after navigation
  };

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Gallery", slug: "/gallery", active: true },
    { name: "Courses", slug: "/courses", active: !authStatus, badge: "Soon" },
    { name: "Study Material", slug: "/study-material", active: !authStatus },
    { name: "Test Series", slug: "/test-series", active: true, badge: "Soon" },
  ];

  const authItems = [
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Join Us", slug: "/signup", active: !authStatus },
  ];

  return (
    <header
      className={`py-2 fixed top-0 w-full z-10 transition-colors duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-gray-400 to-gray-600 shadow-lg"
          : "bg-transparent text-black"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between px-4 md:px-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={() => handleNavClick("/")}>
              <Logo
                imageSrc="../src/assets/logoCC.png"
                altText="Conceptual Classes Logo"
                className="w-14 md:w-16 lg:w-24 md:h-14 lg:h-16"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="md:flex hidden items-center justify-center space-x-8 cursor-pointer">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name} className="relative">
                    <Link
                      onClick={() => handleNavClick(item.slug)}
                      to={item.slug}
                      className={`${
                        location.pathname === item.slug
                          ? "text-red-600 font-extrabold"
                          : isScrolled
                          ? "text-gray-300"
                          : "text-black"
                      } font-medium hover:opacity-100 opacity-80 transition-opacity`}
                    >
                      {item.name}
                    </Link>
                    {item.badge && <Badge text={item.badge} />}
                  </li>
                )
            )}
          </ul>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-4">
              {authItems.map(
                (item) =>
                  item.active && (
                    <li key={item.name}>
                      <button
                        onClick={() => handleNavClick(item.slug)}
                        className="px-6 py-2 text-sm font-semibold rounded-full bg-gray-500 hover:bg-gray-700 text-white shadow-md transition-transform hover:scale-105"
                      >
                        {item.name}
                      </button>
                    </li>
                  )
              )}
              {authStatus && <LogoutBtn />}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-gray-800 hover:text-gray-900 focus:outline-none text-3xl"
            >
              &#8801;
            </button>
          </div>
        </nav>

        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 shadow-lg transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 z-20`}
        >
          <div className="p-6">
            <button
              className="text-white text-2xl absolute top-4 right-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              &times;
            </button>
            <ul className="flex flex-col space-y-4 mt-10">
              {navItems.map(
                (item) =>
                  item.active && (
                    <li key={item.name}>
                      <Link
                        onClick={() => handleNavClick(item.slug)}
                        to={item.slug}
                        className="text-white font-semibold hover:text-gray-300 transition"
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
              )}
              {authItems.map(
                (item) =>
                  item.active && (
                    <li key={item.name}>
                      <button
                        onClick={() => handleNavClick(item.slug)}
                        className="px-6 py-2 text-sm font-semibold rounded-full bg-gray-500 hover:bg-gray-700 text-white shadow-md"
                      >
                        {item.name}
                      </button>
                    </li>
                  )
              )}
              {authStatus && <LogoutBtn />}
            </ul>
          </div>
        </div>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black opacity-50 z-10"
          ></div>
        )}
      </Container>
    </header>
  );
}

export default Header;
