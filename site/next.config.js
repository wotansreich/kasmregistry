/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'CustomKasm',
    description: 'Custom Registry designed by accident',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/wotansreich/kasmregistry',
    contactUrl: 'https://www.wotansreich.com',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
