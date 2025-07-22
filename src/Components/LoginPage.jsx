import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    navigate("/"); // Direct navigation on submit
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-blue-50 to-indigo-50 relative">
      <div className="backdrop-blur-lg b shadow-xl max-w-md w-full rounded-xl p-8 flex flex-col items-center">
        <img src="/logo.png" alt="Lancôme Logo" className="h-32 w-56 object-cover" />
        <p className="text-lg text-gray-800 italic mb-5">
          Unlock Your Scented Story
        </p>
        <form className="w-full space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-200 bg-white/60 placeholder-pink-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-200 bg-white/60 placeholder-pink-300"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg shadow transition-colors"
          >
            Login
          </button>
        </form>
        <div className="flex justify-between w-full mt-4 text-sm text-gray-500">
          <a href="#" className="hover:underline">Forgot password?</a>
          <a href="#" className="ml-auto hover:underline">Create account</a>
        </div>
        <p className="mt-8 text-xs text-gray-400 text-center">
          © {new Date().getFullYear()} Lancôme Paris
        </p>
      </div>
    </div>
  );
}