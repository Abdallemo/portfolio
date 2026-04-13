/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export for Cloudflare Pages
  trailingSlash: true, // Ensures clean URLs (e.g. /projects/ instead of /projects.html)
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static export
  },
}

export default nextConfig
