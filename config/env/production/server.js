module.exports = ( {env}) => ({
  proxy: true,
  url: env('https://strapiv2-bfvw.onrender.com/'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
