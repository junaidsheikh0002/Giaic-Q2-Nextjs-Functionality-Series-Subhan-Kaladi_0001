/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  output: 'standalone'
}

module.exports = nextConfig
