/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "X-SevenField-Engine",
          value: "1.0.0-dev"
        }
      ]
    }
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.zeithrold.com',
        pathname: '/sevenfield/**'
      }
    ]
  }
}

module.exports = nextConfig
