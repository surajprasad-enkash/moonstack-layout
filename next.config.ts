import type { NextConfig } from "next";



const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "moonstack.co",
        pathname: "/wp-content/uploads/**",
      },
       {
        protocol: "https",
        hostname: "secure.gravatar.com",
        pathname: "/avatar/**",
      },
    ],
  },
   reactCompiler: true,
};

module.exports = nextConfig;

export default nextConfig;
