import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { URL } from '../url';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post(`${URL}/api/auth/register`, { username, email, password });
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setError(false);
      navigate("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <div className="relative" style={{ flex: '100%' }}>
          <img src="https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D" className="absolute inset-0 w-full h-full object-cover bg-zinc-900/90" alt="Background" />
          <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
            <div className="absolute inset-0 bg-black/60 flex justify-center items-center">
              <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center items-center space-y-10 gap-x-3 p-6 border shadow-lg w-full max-w-md bg-white/10 backdrop-blur-md rounded-[20px]">
                  <h1 className='text-white'>Create an account</h1>
                  <form>
                    <div className="relative my-4">
                      <input 
                        onChange={(e) => setUsername(e.target.value)} 
                        type="text" 
                        placeholder="Username" 
                        className="block w-72 py-2.5 px-0 text-sm text-default bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600" 
                      />
                    </div>
                    <div className="relative my-4">
                      <input 
                        onChange={(e) => setEmail(e.target.value)} 
                        type="email" 
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
                  <button onClick={handleRegister} className="px-6 py-2 outline text-white hover:outline-yellow-100 rounded-full">Register</button>
                  {error && <p className="text-red-500">Registration failed. Please try again.</p>}
                  <div className="flex justify-center items-center space-x-2">
                    <p className='text-white'>Already have an account?</p>
                    <p className="text-blue-500"><Link to="/login">Login</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
