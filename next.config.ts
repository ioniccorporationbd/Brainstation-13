import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  experimental: {
    // Enables the supported unauthorized()/forbidden() interrupts that render
    // app/unauthorized.tsx (401) and app/forbidden.tsx (403).
    authInterrupts: true,
  },
  async redirects() {
    return [
      {
        // Preserve existing links and SEO after the Global Offices -> Our
        // Offices rename (308 permanent redirect, query strings kept).
        source: "/global-offices",
        destination: "/our-offices",
        permanent: true,
      },
      // Services migrated under /services (single-hop 308, query kept).
      {
        source: "/staff-augmentation",
        destination: "/services/staff-augmentation",
        permanent: true,
      },
      {
        source: "/managed-service",
        destination: "/services/managed-service",
        permanent: true,
      },
      {
        source: "/digital-transformation",
        destination: "/services/digital-transformation",
        permanent: true,
      },
      {
        source: "/technology-consulting",
        destination: "/services/technology-consulting",
        permanent: true,
      },
      {
        source: "/mvp-development",
        destination: "/services/mvp-development",
        permanent: true,
      },
      {
        source: "/ml-ai-development",
        destination: "/services/ml-ai-development",
        permanent: true,
      },
      {
        source: "/data-engineering",
        destination: "/services/data-engineering",
        permanent: true,
      },
      {
        source: "/data-migration",
        destination: "/services/data-migration",
        permanent: true,
      },
      {
        source: "/business-intelligence",
        destination: "/services/business-intelligence",
        permanent: true,
      },
      {
        source: "/insurtech",
        destination: "/services/insurtech",
        permanent: true,
      },
      {
        source: "/3d-modeling-services",
        destination: "/services/3d-modeling-services",
        permanent: true,
      },
      {
        source: "/game-studio",
        destination: "/services/game-studio",
        permanent: true,
      },
      {
        source: "/qa-testing-and-automation",
        destination: "/services/qa-testing-and-automation",
        permanent: true,
      },
      {
        source: "/lms-development",
        destination: "/services/lms-development",
        permanent: true,
      },
      {
        source: "/web-mobile-app-development",
        destination: "/services/web-mobile-app-development",
        permanent: true,
      },
      {
        source: "/ecommerce-development",
        destination: "/services/ecommerce-development",
        permanent: true,
      },
      {
        source: "/adobe-experience-manager",
        destination: "/services/adobe-experience-manager",
        permanent: true,
      },
      {
        source: "/sharepoint-services",
        destination: "/services/sharepoint-services",
        permanent: true,
      },
      {
        source: "/blockchain-development",
        destination: "/services/blockchain-development",
        permanent: true,
      },
      {
        source: "/shopify-services",
        destination: "/services/shopify-services",
        permanent: true,
      },
      {
        source: "/field-force-automation",
        destination: "/services/field-force-automation",
        permanent: true,
      },
      {
        source: "/banking-solutions",
        destination: "/services/banking-solutions",
        permanent: true,
      },
      {
        source: "/cloud-solutions",
        destination: "/services/cloud-solutions",
        permanent: true,
      },
      {
        source: "/cyber-security",
        destination: "/services/cyber-security",
        permanent: true,
      },
      {
        source: "/erp-development",
        destination: "/services/erp-development",
        permanent: true,
      },
      {
        source: "/data-science-business-intelligence",
        destination: "/services/data-science-business-intelligence",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "logo.clearbit.com", pathname: "/**" },
      { protocol: "https", hostname: "upload.wikimedia.org", pathname: "/**" },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        pathname: "/**",
      },
      { protocol: "https", hostname: "pngimg.com", pathname: "/**" },
      { protocol: "https", hostname: "images.credly.com", pathname: "/**" },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        pathname: "/**",
      },
      { protocol: "https", hostname: "www.liblogo.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
