import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';
import { FaBars } from "react-icons/fa6";
import { useContext, useEffect, useRef, useState } from "react";
import Menu from "./Menu"; 
import { UserContext } from "../context/UserContext";
import { MdOutlineTravelExplore } from "react-icons/md";
import '../App.css';

const Navbar = () => {
  const [prompt, setPrompt] = useState(" "); // State to handle the search input
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const menuRef = useRef(null); // Ref to detect clicks outside the menu

  // Function to toggle the menu's visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { user } = useContext(UserContext); // Fetching user context

  // Only show search bar on certain routes
  const shouldShowSearch = !['/login', '/register', '/write', '/posts/post', '/edit', '/profile', '/about'].some(path => location.pathname.includes(path));

  // Close menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close menu if click is outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Cleanup event listener
    };
  }, [menuRef]);

  return (
    <div className="fixed top-0 w-full flex items-center justify-between px-6 md:px-[200px] py-8 bg-black text-white z-50 border-b-2 border-gray-800"> 
      <div className="flex items-center text-lg md:text-xl font-extrabold mr-14">
        <MdOutlineTravelExplore />
        <span><Link to="/">Travelers' Blog</Link></span>
      </div>

      {shouldShowSearch && (
        <div className="flex justify-center items-center space-x-0">
          {/* Handle search input */}
          <p onClick={() => navigate(prompt ? "?search=" + prompt : navigate)} className="cursor-pointer"><BsSearch /></p>
          <input onChange={(e) => setPrompt(e.target.value)} className="outline-none bg-black px-3" placeholder="Search" type="text" />
        </div>
      )}

      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
        {user ? (
          <h3><Link to="/write">Write</Link></h3>
        ) : (
          <>
            {/* Links for non-authenticated users */}
            <h3><Link to="/login">Login</Link></h3>
            <h3><Link to="/register">Register</Link></h3>
            <h3><Link to="/about">About</Link></h3>
          </>
        )}
        {/* Only show the toggle menu for authenticated users */}
        {user && (
          <div onClick={toggleMenu}>
            <p className="cursor-pointer relative"><FaBars /></p>
            {/* Render Menu only when toggled */}
            {isMenuOpen && (
              <div ref={menuRef} className="absolute right-0 top-full mt-2 z-50">
                <Menu />
              </div>
            )}
          </div>
        )}
      </div>

    
    
      <div onClick={toggleMenu} className="md:hidden text-lg cursor-pointer relative z-50">
        <FaBars />
      </div>

      {isMenuOpen && (
        <div ref={menuRef} className="absolute right-0 top-full mt-2 z-50">
          <Menu />
        </div>
      )}
    </div>
  );
};

export default Navbar;
