import { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({ children }) {
   const [isVisible, setIsVisible] = useState(false);
   const ref = useRef(null);

   useEffect(() => {
      const onWindScroll = () => {
         const element = ref.current;
         if (element) {
            const { top } = element.getBoundingClientRect();
            const isVisible = top < window.innerHeight;
            setIsVisible(isVisible);
         }
      };

      window.addEventListener("scroll", onWindScroll);
      return () => {
         window.removeEventListener("scroll", onWindScroll);
      };
   }, []);

   const classes = `transition-opacity duration-2000 
       ${isVisible ? "opacity-100" : "opacity-0"}`;

   return (
      <div ref={ref} className={classes}>
         {children}
      </div>
   );
}
