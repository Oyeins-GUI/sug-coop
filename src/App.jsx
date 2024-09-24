import Header from "./components/Header";
import Main from "./components/Main";

function App() {
   return (
      <>
         <Header />
         <Main />
         <footer className="bg-[#312F2F] text-white">
            <div className="max-w-4xl mx-auto px-5 xl:px-0">
               <div className="pt-8 flex justify-between flex-col md:flex-row items-center">
                  <div>
                     <h3 className="text-center md:text-left">Follow Us On</h3>
                     <div>
                        <a href="/">Facebook</a>
                        <a href="/">Instagram</a>
                     </div>
                  </div>
                  <div className="mt-3">
                     <p>Get the latest news delivered to your inbox</p>
                     <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-1 rounded-md outline-none border-none border-2 border-white text-black"
                     />
                  </div>
               </div>
               <p className="text-center mt-6 pb-4 text-[12px]">
                  Copyright ©2024 - Niger Delta University Student Union
                  Multi-Purpose Cooperative Society Limited
               </p>
            </div>
         </footer>
      </>
   );
}

export default App;

export function Cta() {
   return (
      <div className="flex-col md:flex-row flex items-center justify-center gap-5 md:gap-10">
         <div className="rounded-2xl p-4 bg-black text-white text-center w-[330px] flex justify-center items-center flex-col bg-gradient-to-br from-from to-to">
            <img src="/logo.png" className="w-16 mb-3" alt="" />
            <h1 className="font-bold">MEMBERSHIP</h1>
            <p className="leading-tight mb-3">
               Become a member of the cooperative society.
            </p>
            <button
               type="button"
               className="border border-slate-50 rounded-full px-5 py-2 mt-2 bg-black"
            >
               Join Us
            </button>
         </div>

         <div className="rounded-2xl p-4 bg-black text-white text-center w-[330px] flex justify-center items-center flex-col bg-gradient-to-br from-from to-to">
            <img src="/logo.png" className="w-16 mb-3" alt="" />
            <h1 className="font-bold">COMMUNITY</h1>
            <p className="leading-tight mb-3">
               Know more about the student cooperative society and members
               involved.
            </p>
            <button
               type="button"
               className="border border-slate-50 rounded-full px-5 py-2 mt-2 bg-black"
            >
               Join Us Now
            </button>
         </div>
      </div>
   );
}
