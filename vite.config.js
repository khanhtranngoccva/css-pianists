import {defineConfig} from 'vite'
import nodePolyfills from "rollup-plugin-polyfill-node";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        nodePolyfills({include: "events"}),
        react(),
    ],
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:5000",
                changeOrigin: true,
            }
        }
    }
});
