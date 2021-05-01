const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    fallbacks: {
      image: "/static/images/fallback.jpg",
      // document: '/other-offline',  // if you want to fallback to a custom    page other than /_offline
      // font: '/static/font/fallback.woff2',
      // audio: ...,
      // video: ...,
    },
    cacheOnFrontEndNav: true,
  },
});
