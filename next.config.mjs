/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent clickjacking / iframe embedding
          {
            key: "X-Frame-Options",
            value: "DENY",
          },

          // Modern iframe protection
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "object-src 'none'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data: https:",
              "connect-src 'self' https:",
              "frame-src 'self' https:",
              "media-src 'self' blob: https:",
              "worker-src 'self' blob:",
            ].join("; "),
          },

          // Prevent MIME sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },

          // Don't expose referrer information unnecessarily
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },

          // Disable browser features you don't need
          {
            key: "Permissions-Policy",
            value: [
              "camera=()",
              "microphone=()",
              "geolocation=()",
              "payment=(self)",
              "usb=()",
              "bluetooth=()",
              "accelerometer=()",
              "gyroscope=()",
              "magnetometer=()",
              "fullscreen=(self)",
            ].join(", "),
          },
        ],
      },
    ];
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
