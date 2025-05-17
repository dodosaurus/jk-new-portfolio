/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['jkovac.eu'],
  },
  poweredByHeader: false, // Remove the X-Powered-By header for security
}

module.exports = nextConfig
