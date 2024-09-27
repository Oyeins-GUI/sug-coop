import { FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
   return (
      <footer className="bg-[#312F2F] text-white">
         <div className="max-w-4xl mx-auto px-5 xl:px-0">
            <div className="pt-8 flex justify-between flex-col md:flex-row items-center">
               <div>
                  <div className="flex items-center gap-2">
                     <h3 className="text-center md:text-left">Follow Us</h3>
                     <a href="/">
                        <FaXTwitter className="text-xl" />
                     </a>
                     <a href="/">
                        <FaInstagram className="text-xl" />
                     </a>
                  </div>
               </div>
               <div className="mt-3">
                  <p>Get the latest news delivered to your inbox</p>
                  <div className="flex items-center justify-between gap-2">
                     <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-3 py-1 rounded-md outline-none border-none border-2 border-white text-black"
                     />
                     <button
                        type="button"
                        className="border-2 border-slate-100 px-3 py-1 rounded-lg"
                     >
                        Subscribe
                     </button>
                  </div>
               </div>
            </div>
            <p className="text-center mt-6 pb-4 text-[12px]">
               Copyright ©2024 - Niger Delta University Student Union
               Multi-Purpose Cooperative Society Limited
            </p>
         </div>
      </footer>
   );
}
