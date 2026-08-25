/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a compact, self-contained server bundle for VPS deployments.
  output: 'standalone',
  poweredByHeader: false,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  async redirects() {
    // Legacy pre-redesign URLs that are still indexed by Google — send them
    // to their closest new-site equivalent instead of a hard 404
    // (see website content audit, Sitewide Finding S3).
    return [
      { source: '/Laser-Treatments.html', destination: '/treatments?category=laser', permanent: true },
      { source: '/Hair-Treatments.html', destination: '/treatments?category=hair', permanent: true },
      { source: '/Anti-ageing-Treatments.html', destination: '/treatments?category=anti-ageing', permanent: true },
      { source: '/about-us.html', destination: '/about', permanent: true },
      { source: '/doctor-detail.html', destination: '/about', permanent: true },
      { source: '/review.html', destination: '/gallery', permanent: true },
    ];
  },
  async headers() {
    const isProduction = process.env.NODE_ENV === 'production';
    const scriptSources = isProduction
      ? "'self' 'unsafe-inline'"
      : "'self' 'unsafe-inline' 'unsafe-eval'";
    const csp = [
      "default-src 'self'",
      `script-src ${scriptSources}`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://images.unsplash.com https://plus.unsplash.com https://images.pexels.com",
      "media-src 'self' blob:",
      "font-src 'self' data:",
      "connect-src 'self'",
      // Without an explicit frame-src, the CSP falls back to default-src
      // 'self' — which silently blocks the Google Maps <iframe> embeds on
      // the Contact page (they render as a broken/blank frame instead of
      // the map). Allow Google's embed domain explicitly.
      "frame-src 'self' https://www.google.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      ...(isProduction ? ["upgrade-insecure-requests"] : []),
    ].join('; ');

    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
        ],
      },
    ];
  },
};

export default nextConfig;
