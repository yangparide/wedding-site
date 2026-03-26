/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // I tuoi colori personalizzati raffinati
        'wedding-sage': '#8DA399',    // Verde Salvia (per icone e accenti)
        'wedding-cream': '#FDFCF9',   // Sfondo morbido (invece del bianco puro)
        'wedding-gold': '#C5A065',    // Oro sbiadito (per dettagli preziosi)
        'wedding-slate': '#566573',   // Un grigio-blu profondo per i testi leggibili
      },
      fontFamily: {
        // I nomi che useremo nelle classi Tailwind (es. font-serif)
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}