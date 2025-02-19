import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import ogPlugin from 'vite-plugin-open-graph';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    ogPlugin({
      basic: {
        url: 'https://nimbuswolf.netlify.app', // The URL of your website
        title: 'Nimbus Wolf Studios',
        description: 'A web design and motion graphics studio crafting innovative solutions to drive business growth and success.',
        image: '/images/laptop.jpg', // Place image in the 'public' directory
        locale: 'en_US',
        siteName: 'Nimbus Wolf Studios',
      },
      twitter: {
        image: '/images/laptop.jpg', // Same image for Twitter
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs', // It's okay to keep the .mjs if you're using ESM imports
  },
});
