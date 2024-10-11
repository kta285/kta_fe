/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        error500: '#F92E20',
        error600: '#D92D20',
        primary: '#fb6514',
        orange500: '#FB6514',
        black: 'hsla(0, 0%, 0%, 1)',
        white: 'hsla(0, 0%, 100%, 1)',
        transparent: 'transparent',
        gray50: '#F9FAFB',
        gray100: '#F2F4F7',
        gray200: '#E4E7EC',
        gray300: '#D0D5DD',
        gray400: '#A3ADBE',
        gray500: '#667085',
        gray600: '#475467',
        gray700: '#344054',
        gray800: '#1D2939',
      },
      screens: {
        ms: '500px',
        md: '768px',
        lg: '1420px',
        xg: '1920px',
      },
      fontSize: {
        h1: ['30px', '45px'],
        h2: ['24px', '36px'],
        h3: ['20px', '30px'],
        h4: ['16px', '24px'],
        h5: ['14px', '21px'],
        h6: ['12px', '18px'],
        h7: ['10px', '15px'],
      },
    },
  },
  plugins: [],
};
