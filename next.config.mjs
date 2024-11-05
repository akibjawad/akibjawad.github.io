/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export',
  // basePath: '/akibjawad.github.io',
  // assetPrefix: '/akibjawad.github.io/',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.us-west-2.amazonaws.com',
        port: '',
        pathname: '/portfolio.ajawad/**',
      },
    ],
  }
};


export default nextConfig;
