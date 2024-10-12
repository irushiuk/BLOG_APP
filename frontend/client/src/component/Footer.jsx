import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className=" w-full bg-black px-8 md:px-[500px] flx justify-between
    md:text-md py-8 ">
        <div className="flex-col text-center text-white ">
        <div className="flex justify-center space-x-6 mb-4">
            <FaFacebook size={24} className="cursor-pointer" /> {/* You can adjust the size as needed */}
            <FaInstagram size={24} className="cursor-pointer"/>    
            <FaPinterest size={24} className="cursor-pointer"/> 
            <FaYoutube size={24} className="cursor-pointer"/>    
         </div>
        
            <p>@Traveler's Blog</p>

        </div>
    </div>
    {/* <p>All rights reserved.</p> */}
    </>
    
  )
}

export default Footer
