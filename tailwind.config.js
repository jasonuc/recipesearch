const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Agbalumo': ["Agbalumo", "ui-serif"],
        'Oswald': ["Oswald", "ui-serif"],
        'sometypeMono': ["Sometype Mono", "ui-serif"]
      },
      colors: {
        alabaster: "#EAE7DC",
        linen: "#D8C3A5",
        slateGray: "#8E8D8A",
        melon: "#E98074",
        terracotta: "#E85A4F"
      }
    },
  },
  plugins: [],
});