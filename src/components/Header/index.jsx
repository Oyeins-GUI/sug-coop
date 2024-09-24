import HeroSection from "../HeroSection";

export default function Header() {
   return (
      <div className="bg-hero-img bg-cover pb-12">
         <header className="text-white pb-5">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-5 xl:px-0 py-2">
               <img src="/logo.png" className="w-20" alt="coop logo" />
               <nav className="flex justify-center items-center gap-10">
                  <li className="list-none">
                     <a href="">About</a>
                  </li>
                  <li className="list-none">
                     <a href="">Contact Us</a>
                  </li>
               </nav>
            </div>
         </header>
         <HeroSection />
      </div>
   );
}
