import ChooseUs from "../../components/ChooseUsSection";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import JoinUs from "../../components/JoinUsSection";
import RevealOnScroll from "../../components/RevealOnScroll";

export default function Home() {
   return (
      <>
         <div className="bg-hero-img bg-cover pb-12">
            <Header />
            <HeroSection />
         </div>
         <main className="mx-auto mt-8">
            <RevealOnScroll>
               <JoinUs />
            </RevealOnScroll>
            <RevealOnScroll>
               <ChooseUs />
            </RevealOnScroll>
         </main>
         <Footer />
      </>
   );
}
