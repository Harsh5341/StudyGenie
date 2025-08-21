
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  devServer: {
    allowedDevOrigins: [
      "https://6000-firebase-studio-1755799865951.cluster-va5f6x3wzzh4stde63ddr3qgge.cloudworkstations.dev"
    ],
  },
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
