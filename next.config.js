/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compress: true,
  images: {
    domains: ["profilinator.rishav.dev", "images.emojiterra.com", "lucas-manoguerra.netlify.app"]
  }
}

module.exports = nextConfig

