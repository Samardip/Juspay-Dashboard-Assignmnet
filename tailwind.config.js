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
        'custom-progress':'var(--Secondary-Cyan, rgba(168, 197, 218, 1))',
        'custom-pie-black':'var(--Primary-Brand, rgba(28, 28, 28, 1))',
        'custom-pie-green':'var(--Secondary-Mint, rgba(186, 237, 189, 1))',
        'custom-pie-blue':'var(--Secondary-Indigo, rgba(149, 164, 252, 1))',
        'custom-pie-lightBlue':'var(--Secondary-Blue, rgba(177, 227, 255, 1))',
        'custom-pie-purple':'var(--Primary-Brand, rgba(198, 199, 248, 1))'
      },
    },
  },
  plugins: [],
}

