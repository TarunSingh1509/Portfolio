/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     ppr:"incremental"},
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
        ],
    },
};

export default nextConfig;
