/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'custom-black-5': 'var(--black-5, #FFFFFF1A)', 
        'custom-purple':'var(--Primary-Brand, #C6C7F8)',
        'custom-blue':'var(--Primary-Blue, rgba(227, 245, 255, 1))',
        'custom-grey':'var(--Primary-Light, rgba(247, 249, 251, 1))',
        'custom-grey-1':'rgb(210 224 243)',
        'custom-progress':'var(--Secondary-Cyan, rgba(168, 197, 218, 1))'
      },
    },
  },
  plugins: [],
}

