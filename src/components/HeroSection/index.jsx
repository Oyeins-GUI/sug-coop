export default function HeroSection() {
   return (
      <div className="max-w-5xl mx-auto px-5 xl:px-0 text-white">
         <p className="text-[24px] mb-2 mt-2 font-semibold">
            Would you like to join us?
         </p>
         <h1 className="text-[56px] leading-none max-w-[600px] mb-3 font-semibold">
            Building a profitable system for the student community
         </h1>
         <p className="text-[15px] max-w-[700px] leading-[1.15] mb-[40px]">
            &quot;Our mission is to create sustainable business ventures that
            generate funds, which are reinvested into supporting students&apos;
            academic and personal development&quot;
         </p>
         <a
            href="/"
            className="border border-slate-50 rounded-full px-5 py-2 bg-black"
         >
            Read more
         </a>
      </div>
   );
}
