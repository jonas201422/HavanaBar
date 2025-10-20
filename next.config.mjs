/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.havana-lounge.at'
      },
      {
        protocol: 'https',
        hostname: 'scontent.cdninstagram.com'
      },
      {
        protocol: 'https',
        hostname: 'scontent.xx.fbcdn.net'
      },
      {
        protocol: 'https',
        hostname: 'maps.gstatic.com'
      }
    ]
  },
   basePath: '/HavanaBar',
  assetPrefix: '/HavanaBar/',
 typescript: {
    // Allow production builds to succeed even if there are TypeScript errors
    ignoreBuildErrors: true,
  },
 eslint: {
    // Allow production builds to succeed even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
}; 

export default nextConfig;
