/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a", 
        bone: "#ffffff", 
        magenta: "var(--color-magenta)", 
        neonPink: "var(--color-neonPink)", 
        purpleNight: "#1e293b", 
        toxicGreen: "var(--color-toxicGreen)", 
        acid: "var(--color-acid)",
        neoBlue: "var(--color-neoBlue)"
      },
      boxShadow: {
        brutal: "4px 4px 0px var(--shadow-color)",
        brutalLg: "6px 6px 0px var(--shadow-color)",
        brutalSm: "2px 2px 0px var(--shadow-color)",
      },
      fontFamily: {
        display: ["Outfit", "Inter", "system-ui"],
        body: ["Inter", "system-ui"]
      }
    }
  },
  plugins: []
};
