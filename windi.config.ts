import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    container: {
      padding: {
        DEFAULT: '0',
        sm: '10px',
        lg: '20px',
        xl: '25px',
      },
    },
    fontSize: {
      asm: ['10px', '16px'],
      tsm: ['12px', '18px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      mbase: ['18px', '24px'],
      lg: ['20px', '28px'],
      tlg: ['22px', '57px'],
      xl: ['24px', '32px'],
      hxl: ['26px', '26px'],
      ixl: ['28px', '28px'],
      bxl: ['30px', '36px'],
      txl: ['32px', '40px'],
      stxl: ['35px', '35px'],
      mxl: ['40px', '46px'],
      fxl: ['44px', '48px'],
      gxl: ['48px', '48px'],
      axl: ['56px', '64px'],
      dxl: ['60px', '64px'],
      cxl: ['66px', '74px'],
      sxl: ['88px', '96px'],
      exl: ['120px', '120px'],
    },
    backgroundColor:(theme: any) => ({
      ...theme('colors'),
      'mdx-blue': '#1400FF',
      'mdx-grey': '#FCFCFD',
      'mdx-white': '#ffffff',
      'mdx-black': '#ff0000',
    }),
    textColor: (theme: any) => ({
      ...theme('colors'),
      'mdx-blue': '#1400FF',
      'mdx-grey': '#868E96',
      'mdx-white': '#ffffff',
      'mdx-black': '#000000',
    }),
    screens: {
      sm: '680px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '980px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  extract: {
    include: ['**/*.{tsx,jsx,js,css,scss,html}'],
    exclude: ['node_modules', '.git', 'build'],
  },
})
