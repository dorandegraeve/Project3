module.exports = ({ env }) => ({
    url: env('HEROKU_URL'),
  });heroku config:set HEROKU_URL=$(heroku info -s | grep web_url | cut -d= -f2)