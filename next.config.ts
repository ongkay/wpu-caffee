import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  devIndicators: false,
  images: {
    domains: [
      'https://cscmaqpxklxzqkzocujs.storage.supabase.co',
      'https://cscmaqpxklxzqkzocujs.supabase.co',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cscmaqpxklxzqkzocujs.storage.supabase.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cscmaqpxklxzqkzocujs.supabase.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
