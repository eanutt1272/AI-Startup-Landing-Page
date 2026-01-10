/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              prettier: false,
              svgo: true,
              titleProp: true,
            },
          },
        ],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;