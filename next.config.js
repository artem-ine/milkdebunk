module.exports = {
  async redirects() {
    return [
      {
        source: '/en-us',
        destination: '/',
        permanent: true,
      },
    ]
  },
}