import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function ContactUs() {
   return (
      <div className="grid grid-rows-even-layout min-h-screen">
         <div className="bg-hero-img bg-cover">
            <Header />
         </div>
         <main className="">
            <div className="max-w-5xl mx-auto mt-8 px-5 xl:px-0">
               <div className="flex items-center justify-evenly flex-col md:flex-row">
                  <div className="flex flex-col gap-2 md:gap-4 mb-2 md:mb-0 text-center">
                     <h1 className="text-3xl font-bold">Contact Us Today!</h1>
                     <p className="text-2xl">Call Us: +2349133758980</p>
                  </div>
                  <form
                     onSubmit={(e) => e.preventDefault()}
                     className="bg-slate-800 p-6 rounded-lg mb-4 md:mb-0"
                  >
                     <h3 className="mb-4 text-white font-bold text-lg">
                        ...have an inquiry? Leave a message with us.
                     </h3>
                     <div className="flex flex-col gap-4">
                        <input
                           type="text"
                           className="px-3 py-2 rounded-md"
                           placeholder="Your name"
                        />
                        <input
                           type="email"
                           className="px-3 py-2 rounded-md"
                           placeholder="Your email"
                        />
                        <input
                           type="number"
                           className="px-3 py-2 rounded-md"
                           placeholder="Your phone number"
                        />

                        <textarea
                           type="text"
                           className="px-3 py-2 rounded-md"
                           placeholder="Your message"
                        />
                     </div>
                     <button
                        type="submit"
                        className="mt-4 border border-slate-100 rounded-lg text-white px-3 py-1"
                     >
                        Send Message
                     </button>
                  </form>
               </div>
            </div>
         </main>
         <Footer />
      </div>
   );
}
