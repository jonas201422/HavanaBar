/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
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
  }
};

export default nextConfig;
