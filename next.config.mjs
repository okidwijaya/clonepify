/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "clonepify-backend.vercel.app",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/**",
      },
    ],
  },
};

// env: {
//   NEXT_PUBLIC_API_URL: process.env.NODE_ENV === 'development'
//     ? 'http://127.0.0.1:8000/'
//     : 'clonepify-backend.vercel.app'
// }
// images: {
//   remotePatterns: [
//     {
//       protocol: "http",
//       hostname: "clonepify-backend.vercel.app",
//       port: "8000",
//       pathname: "/**",
//     },
//   ],
// },
export default nextConfig;
