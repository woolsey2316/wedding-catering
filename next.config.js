const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  publicRuntimeConfig: {
    APP_NAME: 'SEOBLOG',
    API_DEVELOPMENT: 'http://localhost:8000/api',
    PRODUCTION: false
  },
  output: 'standalone',
});

