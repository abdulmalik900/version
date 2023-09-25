"use client"
import Link from "next/link";
import { RiMenu3Line } from 'react-icons/ri';
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  
  return (
    <>

    {/* Header Start */}
  <header className="bg-second  text-gray-300 h-16 flex justify-start items-center">
      <nav className="flex justify-between items-center w-[92%] mx-auto relative z-10">
      <Image src="/Images/logo1.png" alt="Logo" width={80} height={80} />
        <div className="md:flex hidden">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
            <Link href="../Home" legacyBehavior>
                <a className="hover:text-gray-50 font-sans  ">Home</a>
              </Link>
            </li>
            <Link href="../Services" legacyBehavior>
                <a className="hover:text-gray-50 font-sans">Moving Service </a>
              </Link>
            <Link href="../About" legacyBehavior>
                <a className="hover:text-gray-50 font-sans">Location</a>
              </Link>
            <li>
            <Link href="../About" legacyBehavior>
                <a className="hover:text-gray-50 font-sans">About Us</a>
              </Link>
            </li>

            <li>
            <Link href="../Contact" legacyBehavior>
                <a className="hover:text-gray-50 font-sans">Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <button className="bg-second text-white py-2 px-4   rounded-md font-bold hidden md:block">
          <div className="flex-wrap inline-flex space-x-3"> 
          <a href="#" aria-label="facebook" className="hover:text-gray-400"> <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"> 
              <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" /> 
            </svg></a> 
         
          <a href="#" aria-label="linkedin" className="hover:text-gray-400"> <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"> 
              <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" /> 
            </svg></a>
          <a href="#" aria-label="youtube" className="hover:text-gray-400"> <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"> 
              <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" /> 
            </svg></a> 
        </div>                         
            
          </button>
          <RiMenu3Line
            onClick={toggleMenu}
            className="text-3xl cursor-pointer md:hidden"
          />
        </div>
      </nav>
      {showMenu && (
        <nav className="md:hidden w-full h-50 bg-second absolute top-16 z-10">
          <ul className="flex flex-col gap-5 font-semibold items-center py-4">
            <li>
            <Link href="../Home" legacyBehavior>
                <a className="hover:text-gray-50 font-sans">Home</a>
              </Link>
            </li>
            <li>
              
              <a className="hover:text-gray-50 font-sans"> Moving Service</a>
            </li>
            <li>
              <a className="hover:text-gray-50 font-sans">Location</a>
            </li>
            <li>
            <Link href="../OurProject" legacyBehavior>
                <a className="hover:text-gray-50 font-sans">About Us</a>
              </Link>
            </li>
            <li>
              <a className="hover:text-gray-50 font-sans">Contact Us</a>
            </li>
            
          </ul>
        </nav>
      )}
    </header>
    {/* Header End */}
    </>
  )
}

export default Navbar