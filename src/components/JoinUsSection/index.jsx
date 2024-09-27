export default function JoinUs() {
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
