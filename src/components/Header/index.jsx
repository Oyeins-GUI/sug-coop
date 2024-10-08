import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

export default function Header() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <header className="text-white relative">
         <div className="max-w-6xl mx-auto flex justify-between items-center px-5 xl:px-0 py-2">
            <a href="/">
               <img src="/logo.png" className="w-16" alt="coop logo" />
            </a>
            <nav className="hidden md:flex justify-center items-center gap-10">
               <li className="list-none">
                  <Link to="/">Home</Link>
               </li>
               <li className="list-none">
                  <Link to="/about">About</Link>
               </li>
               <li className="list-none">
                  <Link to="/contact-us">Contact Us</Link>
               </li>
            </nav>

            {!isOpen && (
               <GiHamburgerMenu
                  className="text-white text-2xl md:hidden"
                  onClick={() => setIsOpen(true)}
               />
            )}
            {isOpen && (
               <IoCloseSharp
                  className="text-white text-2xl md:hidden"
                  onClick={() => setIsOpen(false)}
               />
            )}
         </div>

         {isOpen && (
            <nav className="md:hidden absolute top-20 bg-white w-full text-black px-5 py-2 flex gap-2 flex-col">
               <li className="list-none p-1 hover:text-white hover:bg-slate-900 transition-all">
                  <Link to="/">Home</Link>
               </li>
               <li className="list-none p-1 hover:text-white hover:bg-slate-900 transition-all">
                  <Link to="/about">About</Link>
               </li>
               <li className="list-none p-1 hover:text-white hover:bg-slate-900 transition-all">
                  <Link to="/contact-us">Contact Us</Link>
               </li>
            </nav>
         )}
      </header>
   );
}
