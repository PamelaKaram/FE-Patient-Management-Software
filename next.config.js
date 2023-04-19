/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    TYPESENSE_API_KEY: "e970f3edddd18b36522",
    TYPESENSE_HOST: "localhost",
    TYPESENSE_PORT: 8108,
    TYPESENSE_PROTOCOL: "http",
  },
};

module.exports = nextConfig;
