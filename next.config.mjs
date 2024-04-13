/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.freecodecamp.org",
        port: "",
        pathname: "/platform/universal/fcc_meta_1920X1080-indigo.png",
      },
    ],
  },
};

export default nextConfig;
