const path = require('path')

module.exports = {
  core: {
    builder: 'webpack5'
  },
  stories: [
    path.join(__dirname, '../node_modules/@inhouse/stories-web/src/*.stories.@(js|jsx|ts|tsx)')
  ],
  addons: [
    '@storybook/addon-essentials',
    '@whitespace/storybook-addon-html'
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                require('autoprefixer')({
                  grid: true
                })
              ]
            }
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: [path.resolve(__dirname, '../node_modules')]
            }
          }
        }
      ],
      include: path.resolve(__dirname, '../')
    })

    return config
  }
}
