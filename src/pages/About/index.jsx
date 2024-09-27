import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function About() {
   return (
      <div className="grid grid-rows-even-layout min-h-screen">
         <div className="bg-hero-img bg-cover">
            <Header />
         </div>
         <main className="max-w-4xl mx-auto mt-8 px-5 xl:px-0">
            <h3 className="text-center font-bold text-3xl mb-2">
               Know More About Us
            </h3>
            <div className="flex flex-col gap-4 text-lg mb-3 md:mb-0">
               <p>
                  Welcome to the Student Union Multipurpose Cooperative Society,
                  proudly situated at Niger Delta University in Amassoma,
                  Bayelsa State. Our cooperative is dedicated to enhancing
                  student life and fostering community development through a
                  diverse array of ventures designed to support our members.
               </p>
               <p>
                  We operate a vibrant restaurant and an artisanal bakery, among
                  other exciting initiatives, all aimed at generating revenue
                  that directly benefits the student community. By prioritizing
                  collaboration and sustainability, we create a dynamic
                  environment where students can engage, learn, and thrive.
               </p>
               <p>
                  Our ultimate goal is to empower students and provide them with
                  valuable resources and opportunities for personal and
                  professional growth. Through our ventures, we strive to
                  cultivate a strong sense of community and promote a culture of
                  cooperation and innovation on campus. Join us in our mission
                  to transform the student experience and make a lasting impact
                  on our university and beyond. Together, we can build a
                  brighter future for all!
               </p>
            </div>
         </main>
         <Footer />
      </div>
   );
}
