module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */

  const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'shgstatic.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'img.shgstatic.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'usapple.org',
          pathname: '**',
        },
      ],
      deviceSizes: [640, 768, 1024, 1280, 1600, 1920],
      imageSizes: [16, 32, 48, 64, 96, 192],
      loader: 'default',
      path: '/_next/image',
      formats: ['image/avif', 'image/webp'],
    },
    trailingSlash: false,
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.mode = 'production'
      }
      return config
    },
    compiler: {
      styledComponents: true,
    },
  }
  return nextConfig
}
