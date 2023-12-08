import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "on_sale_fal": "url('/fal_onsale.png')",
        "mb_fal": "url('/bgImg.png')"
      }, 
      screens: {
        'tab-max': {max: '768px'},
        'phone-max': {max: '425px'}
      },
    },
  },
  plugins: [],
}
export default config
