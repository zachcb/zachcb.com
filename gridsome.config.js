// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// const purgecss = require('@fullhuman/postcss-purgecss')
const postcssNested = require('postcss-nested')
const postcssEnvPreset = require('postcss-preset-env')
const postcssCalc = require('postcss-calc')

const postcssPlugins = [
  postcssNested(),
  postcssEnvPreset(),
  postcssCalc()
]

// if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  siteName: 'zachcb',

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },

  templates: {
    Post: [
      {
        path: '/posts/:slug',
        component: './src/templates/Post.vue'
      }
    ]
  },

  plugins: [
    {
      use: 'gridsome-plugin-tailwind',
        options: {
          config: './tailwind.config.js'
        }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/cms`
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'data/posts/*.md',
        typeName: 'Post',
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    },
  ],
  css: {
    loaderOptions: {
        postcss: {
            plugins: postcssPlugins,
        },
    },
},
}
