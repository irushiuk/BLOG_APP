import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';
import { FaBars } from "react-icons/fa6";
import { useContext, useState } from "react";
import Menu from "./Menu"; // Correctly imported with uppercase 'M'
import { UserContext } from "../context/UserContext";
import { MdOutlineTravelExplore } from "react-icons/md";
import '../App.css'
const Navbar = () => {
  
  const [prompt,setPrompt] = useState(" ")
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Renamed state variable
  const navigate = useNavigate()
  // console.log(prompt)
  const path = useLocation().pathname

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const {user} = useContext(UserContext);
  const shouldShowSearch = !['/login','/register','/write', '/posts/post','/edit','/profile'].some(path => location.pathname.includes(path));

 

  return (
    <div className=" flex items-center justify-between px-6 md:px-[200px] py-6 relative bg-black text-white">
      <h1 className="text-lg md:text-xl font-extrabold mr-14">
        <Link to="/">Travelers' Blog <div><MdOutlineTravelExplore /></div></Link></h1>
        {shouldShowSearch && (
          <div className="flex justify-center items-center space-x-0">
          <p onClick={()=>navigate(prompt?"?search="+prompt:navigate)} className="cursor-pointer"><BsSearch/></p>
          <input onChange={(e)=>setPrompt(e.target.value)} className="outline-none bg-black px-3" placeholder="Search " type="text" />
        </div>

        )}
        
      
      {/* {path==="/" && <div onClick={()=>navigate(prompt?"?search"+prompt:navigate("/"))} className="flex justify-center items-center space-x-2 cursor-pointer">
        <BsSearch />
        <input onChange={(e)=>setPrompt(e.target.value)} className="outline-none px-3" placeholder="Search" type="text" />
      </div>} */}
      
      <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
        {user ? <h3><Link to="/write">Write</Link></h3> : <h3><Link to="/login">Login</Link></h3>}
        {user ? <div onClick={toggleMenu}>
          <p className="cursor-pointer relative"><FaBars/></p>
          {isMenuOpen && <Menu />}
          </div>  : <h3><Link to="/register">Register</Link></h3>}
      </div>
      <div onClick={toggleMenu} className="md:hidden text-lg cursor-pointer">
        <FaBars />
      </div>
      {isMenuOpen && <Menu />} {/* Conditionally render Menu */}
    </div>
  );
};

export default Navbar;
