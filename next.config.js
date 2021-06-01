const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');

module.exports = withCss(
  withSass({
    webpack(config) {
      config.module.rules.push({
        test: /\.(eot|woff?2|ttf|otf|svg|png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      });
      return config;
    },
  }),
);