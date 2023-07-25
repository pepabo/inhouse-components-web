const path = require('path')

module.exports = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  core: {
    disableTelemetry: true,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  babel: (config) => {
    return {
      ...config, configFile: path.resolve(__dirname, "../.babelrc.json"),
    }
  },
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
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: [
                path.resolve(__dirname, '../node_modules'),
              ]
            }
          }
        }
      ]
    })

    return config
  }
}
