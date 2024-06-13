/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY,
        ORGANISATION_ID: process.env.ORGANISATION_ID
    }
};

export default nextConfig;
