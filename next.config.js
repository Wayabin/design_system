const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');

module.exports = withCss(
  withSass({
    typescript:{
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
          ignoreBuildErrors:true,
      },
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