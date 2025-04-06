import React, { useState } from "react";
import { PiClockCountdownFill } from "react-icons/pi";
import { PiWaveSawtoothBold } from "react-icons/pi";


const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black relative">
   
      <div className="w-full max-w-sm bg-black p-8 rounded-lg shadow-md">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-2xl font-bold position:relative">Welcome back</h2>
          <p className="text-sm text-gray-500 mt-2">Please enter your details</p>
        </div>
        <form onSubmit={submitHandler}>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 text-black font-bold rounded-lg p-2 mb-4 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          />
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 text-black font-bold rounded-lg p-2 mb-4 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          />
          
          <button
            type="submit"
            className="w-full bg-white text-black mt-10 font-bold py-2 rounded-lg hover:bg-gray-800"
          >
            Sign in
          </button>
        </form>
        
      </div>

      <div className="absolute flex top-4 left-4 text-white text-xl font-title m-4 font-bold">
        W<PiClockCountdownFill />
        RKFLOW<PiWaveSawtoothBold />

      </div>
    </div>
  );
};

export default Login;
