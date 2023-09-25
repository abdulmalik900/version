/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
  "./*/**/*.{js, jsx, ts, tsx}",
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    // FlowBite library 1st step
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        
        // Website Name : MR ShiftingMovers
        // Build your palette here  
        // 1- Congress Blue
        // 2- deep coffee
        // 3- black  
        'first': 'rgb(3, 181, 233)', 
        'second': 'rgb(114, 61, 70)',
        'third': 'rgb(0, 16, 11)',    
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  // 2nd Step add require('flowbite/plugin') in plugin file  
  plugins: [require('flowbite/plugin')],
}

