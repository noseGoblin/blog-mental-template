/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/webinars',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
