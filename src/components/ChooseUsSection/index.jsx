export default function ChooseUs() {
   return (
      <div className="mt-14">
         <h2 className="text-center font-extrabold text-3xl">
            Why Choose Us???
         </h2>
         <div className="bg-choose-us-bg bg-cover bg-top relative overflow-hidden before:absolute before:-z-[-1] before:bg-repeat before:w-[200%] before:-rotate-12 pb-8">
            <div className="max-w-5xl mx-auto mt-4 md:mt-8">
               <div className="flex items-center md:items-start justify-around mb-8 md:mb-14 flex-col md:flex-row">
                  <img src="/online.jpeg" className="" alt="" />
                  <div className="">
                     <h3 className="text-2xl text-center md:text-left font-bold mb-2 mt-2 md:mt-0">
                        Completely <span className="text-blue-600">Online</span>
                     </h3>
                     <p className="max-w-[400px] text-center md:text-left">
                        Our services are totally online. You can contact us at
                        anytime. Your money is safe with us..
                     </p>
                  </div>
               </div>

               <div className="flex items-center md:items-start justify-around mb-14 flex-col md:flex-row mt-2 md:mt-0">
                  <img src="/regulated.png" className="md:order-last" alt="" />
                  <div className="order-1">
                     <h3 className="text-2xl text-center md:text-left font-bold mb-2 mt-2 md:mt-0">
                        We Are <span className="text-blue-600">Regulated</span>
                     </h3>
                     <p className="max-w-[400px] text-center md:text-left">
                        We are registered and are regulated by authorities such
                        as the ministry of cooperate affairs with all laws and
                        regulations binding us. See registration certificate.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
