import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <Navbar/>
        <div className='relative w-full h-screen'>
      <img 
        src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://plus.unsplash.com/premium_photo-1679917737897-9b373261ad57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhdmVsfGVufDB8fDB8fHww" 
        alt="heroImg" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold">About Us..</h1>
        <p className="tflex flex-col justify-center items-center space-y-10 gap-x-3 p-6 border shadow-lg w-full max-w-md bg-white/10 backdrop-blur-md rounded-[20px]">Travel Blog is a unique free online travel diary for travellers across the world. It works from internet cafes and computers world wide, to allow you to update an online travel diary, it is free to join and takes just minutes to setup, all you need is a working email address. You can contact us here if you have business or press questions - or use the Travel Forum for travelblog user support, travel questions, or just introducing yourself. For advertising information please visit our advertising page</p>
        <Link to="/login">
        {/* <button className="mt-8 px-6 py-3 outline text-white hover:outline-orange-200 rounded-full">
          Get Started
        </button> */}
        </Link>
        
      </div>
    </div>
        <Footer/>

    </div>
  )
}

export default About