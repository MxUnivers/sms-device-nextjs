// next.config.mjs
import path from 'path';

const nextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve('src/components'), // Utilisation de path avec import
    };
    return config;
  },
};

export default nextConfig;
