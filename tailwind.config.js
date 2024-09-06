/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg':
          "linear-gradient( rgba(52,53,54,0.8),rgba(29,54,61,1)), url('/home/hero-bg.avif')",
        'specialities-bg':
          "linear-gradient( rgba(52,53,54,0.8),rgba(29,54,61,0.7)), url('/home/specialities.avif')",
        'doctor-bg':
          "linear-gradient( rgba(52,53,54, 0.9), rgba(52,53,54,0.8)), url('/home/doctor-bg.png')",
        'lesiones-traumaticas':
          "linear-gradient( rgba(53,159,211,0.9), rgba(53,159,211,0.8)), url('/specialities/fracturas.jpg')",
        'enfermedades-degenerativas':
          "linear-gradient( rgba(53,159,211,0.8), rgba(53,159,211,0.7)), url('/specialities/enfermedades-degenerativas.jpg')",
        'lesiones-deportivas':
          "linear-gradient( rgba(53,159,211, 0.8), rgba(53,159,211,0.7)), url('/specialities/lesiones-deportivas.png')",
        shape: "url('/shape.svg')",
        philosophy:
          "linear-gradient(rgba(52,53,54,0.8),rgba(29,54,61,0.7)), url('/home/aboutme/patient.avif')",
        academic:
          "linear-gradient(rgba(52,53,54,0.8),rgba(29,54,61,0.7)), url('/home/aboutme/academic.avif')"
      },
      colors: {
        'custom-blue': {
          light: '#359FD3',
          dark: '#006BA6'
        },
        'custom-black': {
          light: '#3A3D4C'
        },
        'custom-green': {
          light: '#3B8590',
          dark: '#1D363D'
        }
      },
      fontFamily: {
        'Helvetica-neue': ['"Helvetica Neue"', 'sans-serif'] // tu fuente personalizada
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
