import daisyui from 'daisyui';
import daisyUIThemes from  'daisyui/src/theming/themes';
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },

plugins: [daisyui],

 daisyui: {
    themes:[
      "dark",
      {
        black: {
          ...daisyUIThemes["black"],
          primary: "rgb(29, 155, 240)",
        },
      },
    ],
 },
};
