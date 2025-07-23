import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    setError("");

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Mock delay
      
      // Replace with actual authentication logic
      if (email.includes("@") && password.length >= 6) {
        navigate("/");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (err) {
      setError("Login failed. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-pink-50/80 via-blue-50/80 to-indigo-50/80">
    
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur-lg bg-white/70 shadow-xl max-w-md w-full rounded-xl p-8 mx-4"
      >
         <button onClick={()=>navigate(-1)} className=" absolute cursor-pointer top-10 left-10">
      <IoMdArrowRoundBack className="text-3xl"></IoMdArrowRoundBack>

     </button>
        <div className="flex flex-col items-center mb-6">
          <img 
            src="/logo.png" 
            alt="Lancôme Logo" 
            className="h-28 w-48 object-contain mb-4"
            onError={(e) => {
              e.target.src = '/fallback-logo.png';
              e.target.className = "h-28 w-48 object-contain mb-4 grayscale";
            }}
          />
          <p className="text-lg text-gray-700 italic font-light">
            Unlock Your Scented Story
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-300 focus:border-transparent bg-white/80 transition-all"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-300 focus:border-transparent bg-white/80 transition-all"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength="6"
              required
            />
          </div>

          {error && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm text-center"
            >
              {error}
            </motion.p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-lg font-medium text-white transition-colors ${
              isLoading 
                ? 'bg-pink-400 cursor-not-allowed' 
                : 'bg-pink-500 hover:bg-pink-600'
            } shadow-md`}
          >
            {isLoading ? (
              <span className="inline-flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Authenticating...
              </span>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <div className="flex justify-between mt-5 text-sm">
          <a href="#" className="text-gray-500 hover:text-pink-600 transition-colors">
            Forgot password?
          </a>
          <a href="#" className="text-gray-500 hover:text-pink-600 transition-colors">
            Create account
          </a>
        </div>

        <p className="mt-8 text-xs text-gray-400 text-center">
          © {new Date().getFullYear()} Lancôme Paris. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
}