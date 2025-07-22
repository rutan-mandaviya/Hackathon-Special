import React from "react";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const CartSidebar = ({ isOpen, onClose, cartItems }) => (
    
  <AnimatePresence>
    {isOpen && (
      <motion.aside
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 right-0 w-full max-w-sm h-full bg-white/95 shadow-2xl z-[60] p-6 backdrop-blur-lg"
      >
        <button
          className="absolute top-3 right-3 text-2xl text-gray-500"
          onClick={onClose}
          aria-label="Close Cart"
        >
          <IoClose />
        </button>
        <h3 className="text-xl mb-4 font-semibold">Your Cart</h3>
        {(!cartItems || cartItems.length === 0) ? (
          <p className="text-gray-600">Cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item, idx) => (
              <li key={idx} className="py-2 border-b">{item.name}</li>
            ))}
          </ul>
        )}
      </motion.aside>
    )}
  </AnimatePresence>
);

export default CartSidebar;
