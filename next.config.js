module.exports = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/atomic' : '',
  env: {
    ATOMIC_BRAND: process.env.ATOMIC_BRAND
  }
}
