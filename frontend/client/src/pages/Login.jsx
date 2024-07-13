import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { URL } from '../url';
import { UserContext } from '../context/UserContext';
import { FaLock } from "react-icons/fa";
import LoginImg from '../assets/beach.jpg';
import 'react-slideshow-image'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${URL}/api/auth/login`, { email, password }, { withCredentials: true });
      setUser(res.data);
      navigate("/");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <div className=" relative" style={{flex:'100%'}}>
          <img src={LoginImg} className="absolute inset-0 w-full h-full object-cover bg-zinc-900/90" alt="Background" />
          <div className="absolute inset-0 bg-black/60 flex justify-center items-center">
            {/* <h1 className="text-white text-4xl font-bold">Share your travel experience with us...</h1> */}
            <div lassName="absolute inset-0 bg-black/60 flex justify-center items-center">
            <div className="flex justify-center items-center" >
          <div className="flex flex-col justify-center items-center space-y-10 gap-x-3 p-6 border shadow-lg w-full max-w-md bg-white/10 backdrop-blur-md rounded-[20px]">
            <h1>Log into your account</h1>
            <form>
              <div className="relative my-4">
                <input 
                  onChange={(e) => setEmail(e.target.value)} 
                  type="text" 
                  placeholder="Email" 
                  className="block w-72 py-2.5 px-0 text-sm text-default bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600" 
                />
              </div>
              <div className="relative my-4">
                <input 
                  onChange={(e) => setPassword(e.target.value)} 
                  type="password" 
                  placeholder="Password" 
                  className="block w-72 py-2.5 px-0 text-sm text-default bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600" 
                />
              </div>
            </form>
            <button onClick={handleLogin} className="px-6 py-2 bg-blue-500 text-white hover:bg-blue-400 rounded-[30px]">Login</button>
            {error && <p className="text-red-500">Login failed. Please try again.</p>}
            <div className="flex justify-center items-center space-x-2">
              <p>New here?</p>
              <p className="text-blue-500"><Link to="/register">Register</Link></p>
            </div>
          </div>
        </div>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center items-center" style={{flex:'4'}}>
          <div className="flex flex-col justify-center items-center space-y-10 gap-x-3 p-6 border rounded shadow-lg w-full max-w-md bg-white/10 backdrop-blur-md">
            <h1>Log into your account</h1>
            <form>
              <div className="relative my-4">
                <input 
                  onChange={(e) => setEmail(e.target.value)} 
                  type="text" 
                  placeholder="Email" 
                  className="block w-72 py-2.5 px-0 text-sm text-default bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600" 
                />
              </div>
              <div className="relative my-4">
                <input 
                  onChange={(e) => setPassword(e.target.value)} 
                  type="password" 
                  placeholder="Password" 
                  className="block w-72 py-2.5 px-0 text-sm text-default bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600" 
                />
              </div>
            </form>
            <button onClick={handleLogin} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400">Login</button>
            {error && <p className="text-red-500">Login failed. Please try again.</p>}
            <div className="flex justify-center items-center space-x-2">
              <p>New here?</p>
              <p className="text-blue-500"><Link to="/register">Register</Link></p>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Login;
