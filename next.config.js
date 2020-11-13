module.exports = {
  publicRuntimeConfig: {
    APP_NAME: 'SEOBLOG',
    API_DEVELOPMENT: 'http://localhost:8000/api',
    PRODUCTION: false
  }
}

const withImages = require('next-images')
module.exports = withImages()
