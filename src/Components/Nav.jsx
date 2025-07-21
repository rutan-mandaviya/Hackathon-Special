import React, { useEffect, useState } from 'react';
import { CgMenuLeftAlt } from "react-icons/cg";
import { GiShoppingBag } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom'; // <-- ✅ React Router Link

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(8);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('.nav-container')) {
        setIsMenuOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: 'Home', to: '/' },
    { name: 'Perfumes', to: '/perfumes' },
    { name: 'About', to: '/about' },
    { name: 'Login', to: '/login' }
  ];

  return (
    <nav className="sticky top-0 z-50">
      <div className='nav-container relative w-full md:w-[90%] max-w-7xl mx-auto h-16 px-4 sm:px-5 flex justify-between items-center rounded-full overflow-hidden'>

        {/* ☰ Menu Button - mobile only */}
        <button
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          className="md:hidden text-3xl cursor-pointer z-50 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-full p-1"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <IoClose /> : <CgMenuLeftAlt />}
        </button>

        {/* 🅻 Logo */}
        <div className={`flex-shrink-0 z-50 ${isMobile ? 'absolute left-1/2 transform -translate-x-1/2' : ''}`}>
          <Link to="/">
            <img 
              className='h-20 w-44 z-40 sm:h-10 object-cover' 
              src="/logo.png" 
              alt="Company Logo" 
              width={isMobile ? 32 : 40}
              height={isMobile ? 32 : 40}
            />
          </Link>
        </div>

        {/* 🖥️ Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-base lg:text-lg font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="hover:text-pink-500 transition-colors duration-200 px-2 py-1"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* 🛍️ Cart */}
        <button 
          aria-label={`Shopping cart with ${cartCount} items`}
          className="relative flex items-center cursor-pointer z-50 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-full p-1"
        >
          <GiShoppingBag className='text-2xl sm:text-3xl' />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-400 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </button>

        {/* 📱 Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed md:hidden inset-0 bg-white pt-20 px-5 z-30"
            >
              <div className="flex flex-col gap-6 text-lg font-medium">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="hover:text-pink-500 border-b border-gray-100 py-3 px-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Nav;
