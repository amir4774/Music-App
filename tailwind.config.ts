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
      },
      colors: {
        'background': '#0f0817',
        'buttonBackgroundFirst': 'rgba(94, 70, 248, 1)',
        'buttonBackgroundSecond': 'rgba(192, 62, 254, 1)',
        'inputBackground': 'rgba(255, 255, 255, 0.06);',
      },
    },
  },
  plugins: [],
}
export default config
