/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'gray-800': '#4D597D',
        'sky-blue': '#46BDF9',
        'dark-blue': '#051138',
        'grey-900': '#122252',
        'grey-600': '#717A97',
        'grey-400': '#A3ABC4',
        'grey-200': '#DEDFE3',
        'grey-100': '#F7F7F7',
        'grey-50': '#E1E2E3',
        'violet-900': '#38409C',
        'violet-600': '#545FE8',
        'violet-400': '#7580FF',
        'violet-200': '#DEE1FF',
        'violet-100': '#EEF0FF',
        'blue-900': '#38599C',
        'blue-600': '#2F6CE6',
        'blue-400': '#75A3FF',
        'blue-200': '#DEE9FF',
        'blue-100': '#EEF4FF',
        'cyan-900': '#053E5C',
        'cyan-600': '#0A72A8',
        'cyan-400': '#0284C7',
        'cyan-200': '#C2E1F2',
        'cyan-100': '#E1F0F8',
        'green-900': '#086157',
        'green-600': '#0A7B6E',
        'green-400': '#219B8D',
        'green-200': '#C4DFDC',
        'green-100': '#E2EFEE',
        'gradient-via': '#36A3ED',
        'gradient-end': '#2D6BE0',
        'modal-from': '#3182E6',
        'modal-via': '#37A3ED',
        'card-bg': '#ffffff0f'
      },
      backgroundImage: {
        'home-head': "url('/assets/img/bg/bg.png')",
        'analysis-head': "url('/assets/img/bg/bg-light.png')"
      },
      fontSize: {
        xs: ['10px', '12px'],
        xm: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        md: ['18px', '28px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
        '2xl': ['32px', '40px'],
        '3xl': ['36px', '44px'],
        '4xl': ['48px', '60px'],
        '5xl': ['64px', '72px']
      }
    }
  },
  plugins: []
};
