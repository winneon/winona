import type { NextConfig } from 'next';

const next_config: NextConfig = {
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
  experimental: {
    workerThreads: false,
    cpus: 4
  }
};

export default next_config;