import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools';

export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-styled-components',
            {
              displayName: mode === 'development',
            }
          ]
        ]
    }
  }),
    imagetools(),
  ],
  base: '',
}));
