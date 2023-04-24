module.exports = ( {env}) => ({
  proxy: true,
  url: env('https://strapi-v4-testss.herokuapp.com/'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
