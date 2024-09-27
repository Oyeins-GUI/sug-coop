import { Link } from "react-router-dom";

export default function Header() {
   return (
      <header className="text-white">
         <div className="max-w-6xl mx-auto flex justify-between items-center px-5 xl:px-0 py-2">
            <a href="/">
               <img src="/logo.png" className="w-16" alt="coop logo" />
            </a>
            <nav className="flex justify-center items-center gap-10">
               <li className="list-none">
                  <Link to="/about">About</Link>
               </li>
               <li className="list-none">
                  <Link to="/contact-us">Contact Us</Link>
               </li>
            </nav>
         </div>
      </header>
   );
}
