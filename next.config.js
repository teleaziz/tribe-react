module.exports = {
  experimental: {
    modern: true,
    async rewrites() {
      return [
        { source: '/', destination: '/page' },
        { source: '/:page', destination: '/page' },
      ];
    },
    catchAllRouting: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.alias['@builder.io/react'] = '@builder.io/react/server'
    }

    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}
