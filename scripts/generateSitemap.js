const { createWriteStream } = require('fs')
const { SitemapStream } = require('sitemap')
const oldPosts = require('../src/contents/oldPosts.json')
const regularPosts = require('../src/contents/regularPosts.json')
const featuredPosts = require('../src/contents/featuredPosts.json')
const hiddenPosts = require('../src/contents/hiddenPosts.json')

// Creates a sitemap object given the input configuration with URLs
const sitemap = new SitemapStream({ hostname: 'https://jp.chibicode.com' })

const writeStream = createWriteStream('./public/sitemap.xml')
sitemap.pipe(writeStream)
sitemap.write('/')
;[...oldPosts, ...featuredPosts, ...regularPosts, ...hiddenPosts]
  .filter(({ href }) => href.startsWith('/'))
  .forEach(({ href }) => {
    sitemap.write(href)
  })

sitemap.end()
