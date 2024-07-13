import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {URL} from '../url'
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import axios from 'axios'


const Register = () => {

  const [username,setUsername] = useState("")
  const[email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const navigate = useNavigate()

  // const handleRegister = async()=>{
  //   try{
  //     const res=axios.post()
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  // }
  const handleRegister = async () => {
    try {
      const res = await axios.post(`${URL}/api/auth/register`, { // Provide the correct URL for the API endpoint
        username,
        email,
        password,
      });
      //console.log(res.data); // Handle successful registration
      setUsername(res.data.username)
      setEmail(res.data.email)
      setPassword(res.data.password)
      setError(false)
      navigate("/login")
    } 
    
    catch (err) {
      setError(err.response?.data?.message || "An error occurred");
      console.log(err);
    }
  };

  // console.log(username)
  // console.log(email)
  // console.log(password)

  // return (
  //   <div>
  //     <Navbar/>
  //       <div className='w-full flex justify-center items-center
  //   h-[70bh]'>
  //       <div className='flex flex-col justify-center items-center space-y-4'>
  //           <h1>Create an account</h1>
  //           <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='username'/>
  //           <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='email'/>
  //           <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password' />
  //           <button onClick= (handleRegister) className='w-full px-4 py-4'>Register</button>

  //           <div className='flex justify-center items-center spac'>
  //               <p>Already have an account?</p>
  //               <p className="text-gray"><Link to="/login">Login</Link></p>
  //           </div>
  //       </div>

  //   </div>
  //   <Footer/>
  //   </div>
  // )

  return (
    <div>
      <Navbar />
      <div className='w-full flex justify-center items-center h-[70vh]'>
        <div className='flex flex-col justify-center items-center space-y-4'>
          <h1>Create an account</h1>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder='Username'
            className='px-4 py-2 border rounded'
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder='Email'
            className='px-4 py-2 border rounded'
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder='Password'
            className='px-4 py-2 border rounded'
          />
          {error && <p className='text-red-500'>{error}</p>}
          <button
            onClick={handleRegister}
            className='w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            Register
          </button>
          <div className='flex justify-center items-center space-x-2'>
            <p>Already have an account?</p>
            <p className="text-blue-500"><Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default Register