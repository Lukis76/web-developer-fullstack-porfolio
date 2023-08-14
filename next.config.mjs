import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    compress: true,
    images: {
        domains: ['profilinator.rishav.dev', 'images.emojiterra.com', 'lucas-manoguerra.netlify.app', 'testing-library.com', 'raw.githubusercontent.com'],
    },
}

export default withContentlayer(nextConfig)
