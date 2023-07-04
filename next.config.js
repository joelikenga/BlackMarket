/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
  domains:["images.unsplash.com","fakestoreapi.com","api.storerestapi.com"]
}

}

module.exports = nextConfig
