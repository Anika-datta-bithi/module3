// /** @type {import('tailwindcss').Config} */
// export default{
//     content: ["./index.html","./src/**/*.{html,js}"],
//     theme: {
//       extend: {},
//     },
//     plugins: [
//       require('daisyui'),
//     ],
//     daisyui: {
//       themes: ["light"],
//     },
//   }


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
