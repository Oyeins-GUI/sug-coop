/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         backgroundImage: {
            "hero-img": "url('/hero-img.svg')",
            "choose-us-bg": "url('/choose-us-bg.svg')",
            "contact-us-img": "url('/contact-us.jpg')",
         },
         colors: {
            from: "#000000",
            to: "#4E4E4E",
         },
         gridTemplateRows: {
            "even-layout": "auto 1fr auto",
         },
      },
   },
   plugins: [],
};
