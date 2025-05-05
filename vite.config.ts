import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react({
    babel: {
      plugins: [
        ['babel-plugin-styled-components',
          {
            displayName: mode === 'development',
          }
        ]
      ]
    }
  })],
  base: '',
}));
