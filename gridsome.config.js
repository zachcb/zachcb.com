// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const purgecss = require('@fullhuman/postcss-purgecss')
const postcssNested = require('postcss-nested')
const postcssEnvPreset = require('postcss-preset-env')

const postcssPlugins = [
  postcssNested(),
  postcssEnvPreset()
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  siteName: 'zachcb',
  plugins: [
    {
      use: 'gridsome-plugin-tailwind',
        options: {
          config: './tailwind.config.js'
        }
    }
  ],
  css: {
    loaderOptions: {
        postcss: {
            plugins: postcssPlugins,
        },
    },
},
}
