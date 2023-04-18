const path = require('path')

module.exports = {
  stories: ['../stories/*.story.[tj]s'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: [
              require('autoprefixer')({
                grid: true
              })
            ]
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
    }, {
      test: /\.ts$/,
      use: [
        'ts-loader'
      ]
    })
    config.resolve.extensions.push('.ts')

    return config
  }
}
