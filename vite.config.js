import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import Inspect from 'vite-plugin-inspect'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import autoprefixer from 'autoprefixer'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        Inspect(),
        ViteImageOptimizer(),
    ],
    css: {
        postcss: {
            plugins: [
                autoprefixer({})
            ],
        }
    },
    base: '/chef-claude-react-app/'
})
