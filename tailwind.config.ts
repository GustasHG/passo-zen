import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive']
      },
      backgroundImage: {
        "footBg": "url('/public/foot-banner.jpg')",
      },
     
      
      colors: {
        'MarineBlue': '#002a77',
        'Gray':'#abb8c3',

        // Adicione mais cores conforme necessário
      },
    },
  },
  plugins: [],
};
export default config;
