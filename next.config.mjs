/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.sanity.io',
      'blog-mental-template.vercel.app',
      '*.vercel.app',
    ],
  },
};

export default nextConfig;
