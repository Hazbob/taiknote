/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY,
        ORGANISATION_ID: process.env.ORGANISATION_ID,
        GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
        GITHUB_ID: process.env.AUTH_GITHUB_ID,
        POSTGRES_URL: process.env.POSTGRES_URL,
        AUTH_SECRET: process.env.AUTH_SECRET,
        AUTH_RESEND_KEY: process.env.AUTH_RESEND_KEY

    }
};

export default nextConfig;

