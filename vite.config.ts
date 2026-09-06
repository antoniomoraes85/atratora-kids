import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/atratora-kids/',

  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: [
        'favicon.svg',
        'icons/favicon-16x16.png',
        'icons/favicon-32x32.png',
        'icons/apple-touch-icon.png',
      ],

      manifest: {
        name: 'Atratora Kids',
        short_name: 'Atratora Kids',

        description:
          'Aplicativo educacional infantil multilíngue para aprender letras, números, animais e brinquedos através de imagens, palavras e sons.',

        theme_color: '#4F46E5',
        background_color: '#FFFFFF',

        display: 'standalone',
        orientation: 'any',

        start_url: '/atratora-kids/',
        scope: '/atratora-kids/',

        lang: 'pt-BR',

        icons: [
          {
            src: 'icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],

  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
  },
} as any)