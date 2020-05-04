const path = require('path')
const oldPosts = require('./src/contents/oldPosts.json')
const hiddenPosts = require('./src/contents/hiddenPosts.json')

module.exports = {
  webpack(config) {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      src: path.resolve(__dirname, 'src'),
    })

    return config
  },
  experimental: {
    async rewrites() {
      return [
        {
          source: '/jp-2019/:path*',
          destination: 'https://jp-2019.chibicode.com/:path*',
        },
        {
          source: '/static/:path*',
          destination: 'https://jp-2019.chibicode.com/static/:path*',
        },
        ...[...oldPosts, ...hiddenPosts]
          .filter(({ href }) => href.startsWith('/'))
          .map(({ href }) => ({
            source: `${href}`,
            destination: `https://jp-2019.chibicode.com${href}`,
          })),
      ]
    },
  },
}
