import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "resources.moonstack.co",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        pathname: "/avatar/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  async redirects() {
    return [
      {
        source: "/career",
        destination: "/",
        permanent: true, // 301 redirect (SEO friendly)
      },
    ]
  },

  webpack(config) {
    // Find existing rule for SVG
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.(".svg")
    )

    // Exclude SVG from default loader
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i
    }

    // Add SVGR
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
}

export default nextConfig
