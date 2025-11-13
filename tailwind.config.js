/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Theme header background colors
    'bg-brand-green/10', 'bg-brand-teal/10', 'bg-brand-emerald/10', 'bg-brand-cyan/10',
    'bg-brand-mint/10', 'bg-brand-forest/10', 'bg-brand-sage/10',
    'hover:bg-brand-green/20', 'hover:bg-brand-teal/20', 'hover:bg-brand-emerald/20',
    'hover:bg-brand-cyan/20', 'hover:bg-brand-mint/20', 'hover:bg-brand-forest/20', 'hover:bg-brand-sage/20',
    'border-brand-green/30', 'border-brand-teal/30', 'border-brand-emerald/30',
    'border-brand-cyan/30', 'border-brand-mint/30', 'border-brand-forest/30', 'border-brand-sage/30',
  ],
  theme: {
    extend: {
      colors: {
        // Custom palette based on provided colors
        'brand': {
          'green': 'rgb(99 216 134)',        // Primary Green #63D886
          'green-light': 'rgb(143 229 168)', // #8FE5A8
          'green-dark': 'rgb(75 199 109)',   // #4BC76D
          'teal': 'rgb(51 128 135)',         // Blue-Green #338087
          'teal-light': 'rgb(77 163 170)',   // #4DA3AA
          'teal-dark': 'rgb(42 102 112)',    // #2A6670
          'emerald': 'rgb(102 189 137)',     // Dark Green #66BD89
          'emerald-light': 'rgb(133 208 163)', // #85D0A3
          'emerald-dark': 'rgb(82 161 114)', // #52A172
          // Extended palette for rotation
          'cyan': 'rgb(59 166 168)',         // #3BA6A8
          'mint': 'rgb(93 201 151)',         // #5DC997
          'forest': 'rgb(45 122 110)',       // #2D7A6E
          'sage': 'rgb(122 201 154)',        // #7AC99A
        }
      }
    },
  },
  plugins: [],
}
