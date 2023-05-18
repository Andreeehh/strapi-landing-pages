module.exports = ( {env}) => ({
  proxy: true,
  url: env('https://strapi-25fx.onrender.com/'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
