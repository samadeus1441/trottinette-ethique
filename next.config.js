/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  ...(process.env.STATIC_EXPORT ? { output: 'export', distDir: 'dist' } : {}),
}

module.exports = nextConfig

