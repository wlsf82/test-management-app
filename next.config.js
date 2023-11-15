/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tweets-codecademy.s3.eu-central-1.amazonaws.com',
        pathname: '/placeholder.png',
      },
    ],
  },
}

module.exports = nextConfig
