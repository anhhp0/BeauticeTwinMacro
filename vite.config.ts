import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgLoader from 'vite-svg-loader'
import svgr from "vite-plugin-svgr";
import { webpack } from 'webpack';

module.exports = {
  // other config values

  webpack(config: { module: { rules: { test: RegExp; issuer: { and: RegExp[]; }; use: string[]; }[]; }; }): any {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: ['@svgr/webpack'],
    });
    return config;
  }
};
// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
  esbuild: {
    // https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
  plugins: [
    react({
      babel: {
        plugins: [
          'babel-plugin-macros',
          [
            '@emotion/babel-plugin-jsx-pragmatic',
            {
              export: 'jsx',
              import: '__cssprop',
              module: '@emotion/react',
            },
          ],
          [
            '@babel/plugin-transform-react-jsx',
            { pragma: '__cssprop' },
            'twin.macro',
          ],
          [react(), svgLoader()],
          [svgr()],
        ],
      },
    }),
    svgLoader({
      defaultImport: 'url', // or 'raw',
      svgoConfig: {
        multipass: true
      }
    }),
    svgr({
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: {
          floatPrecision: 2,
        },
      },
      // ...
    }),
  ],

})
