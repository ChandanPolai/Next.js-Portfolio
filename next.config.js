// const path = require('path')
 
// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'res.cloudinary.com',
//         pathname: '**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'media.dev.to',
//         pathname: '**',
//       },
//     ],
//   },
// }



// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media2.dev.to', 'dev-to-uploads.s3.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '/dynamic/**',
      },
      {
        protocol: 'https',
        hostname: 'dev-to-uploads.s3.amazonaws.com',
        pathname: '/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig