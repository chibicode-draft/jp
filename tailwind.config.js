module.exports = {
  purge: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      serif:
        '"Hiragino Mincho ProN","ヒラギノ明朝 Pro W6","Hiragino Mincho Pro","HGS明朝E","Yu Mincho","YuMincho","ＭＳ Ｐ明朝",serif',
      mono:
        '"Iosevka Slab Web", "Menlo", "Monaco", "Lucida Console", "Liberation Mono", "DejaVu Sans Mono","Bitstream Vera Sans Mono", "Courier New", monospace',
    },
    extend: {
      colors: {
        gray: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        },
      },
      letterSpacing: {
        'mono-wide': '0.3em',
      },
      fontSize: {
        'mono-xs': '0.8rem',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0, 0, 0, 0.12)',
        hover: '0 20px 60px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
}
