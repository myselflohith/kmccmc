import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'http', hostname: 'localhost', pathname: '/**' },
      // Allow production media URLs when NEXT_PUBLIC_SITE_URL is set (e.g. https://yoursite.com)
      ...(process.env.NEXT_PUBLIC_SITE_URL
        ? (() => {
            try {
              const u = new URL(process.env.NEXT_PUBLIC_SITE_URL)
              return [{ protocol: u.protocol.replace(':', ''), hostname: u.hostname, pathname: '/**' }]
            } catch {
              return []
            }
          })()
        : []),
    ],
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
