import { resolve } from "path"
import { defineConfig } from "vite"
import { viteProjectsJson } from "./plugins/vite-projects-json"

export default defineConfig({
  plugins: [viteProjectsJson()],
})
