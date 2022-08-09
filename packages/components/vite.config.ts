import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), dts()],
  build: {
    target: 'modules',
    outDir: 'dist',
    emptyOutDir: false,
    rollupOptions: {
      external: [
        'vue',
        '@cc-ui-plus/hooks',
        '@cc-ui-plus/utils',
        '@cc-ui/theme-chalk',
      ],
      input: ['./index.ts'],
    },
    lib: {
      entry: './index.ts',
      name: 'index',
      fileName: 'index',
      formats: ['es', 'umd', 'cjs'],
    },
  },
})
