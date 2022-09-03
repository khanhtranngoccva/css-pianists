import {defineConfig} from 'vite'
import nodePolyfills from "rollup-plugin-polyfill-node";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        nodePolyfills({include: "events"}),
        react(),
    ]
});
