const fs = require('fs')
const ghPages = require('gh-pages')

const TOKEN = process.env.GITHUB_TOKEN
const REPOSITORY = process.env.GITHUB_REPOSITORY

const filePath = './out/.nojekyll'
fs.closeSync(fs.openSync(filePath, 'w'))

ghPages.publish(
  'out',
  {
    branch: 'gh-pages',
    repo: `https://${TOKEN}@github.com/${REPOSITORY}.git`,
    user: {
      name: 'github-actions',
      email: 'github-actions@github.com'
    },
    dotfiles: true
  },
  error => {
    if (error) console.error(error)
    else console.log('🚀 Deployed to Github Pages')
  }
)
