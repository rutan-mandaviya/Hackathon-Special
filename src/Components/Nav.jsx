import React, { useEffect, useState } from 'react';
import { CgMenuLeftAlt } from "react-icons/cg";
import { GiShoppingBag } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Lock body scroll when menu is open
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const menuItems = [
    { name: 'Home', to: '/' },
    { name: 'Perfumes', to: '/perfumes' },
    { name: 'About', to: '/about' },
    { name: 'Login', to: '/login' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/20 backdrop-blur-md shadow-sm">
      <div className="relative w-full md:w-[90%] max-w-7xl mx-auto h-16 px-4 sm:px-5 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-3xl z-50"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <IoClose size={28} /> : <CgMenuLeftAlt size={28} />}
        </button>

        {/* Logo - Consistent across all screen sizes */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:left-auto md:translate-x-30 md:relative z-40">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img 
              className='h-36 w-44 object-contain' // Fixed size for all screens
              src="/logo.png" 
              alt="Company Logo"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-base lg:text-lg font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="hover:text-pink-500 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Cart Icon */}
        <div className="relative z-40">
          <GiShoppingBag className='text-2xl sm:text-3xl' />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-400 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Dark overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-30"
                onClick={toggleMenu}
              />
              
              {/* Menu content */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', ease: 'easeInOut' }}
                className="fixed top-0 left-0 w-full h-[100vh] bg-white z-40 shadow-xl"
              >
                <div className="pt-24 px-6">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="block py-4 text-xl border-b border-gray-100 text-gray-800 hover:text-pink-500"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Nav;