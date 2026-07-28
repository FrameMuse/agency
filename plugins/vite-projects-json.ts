import { resolve } from "path"
import type { Plugin } from "vite"
import { readProjects } from "./parse-projects"

const PROJECTS_DIR = resolve(__dirname, "../projects")

export function viteProjectsJson(): Plugin {
  const virtualModuleId = "virtual:projects"
  const resolvedVirtualModuleId = "\0" + virtualModuleId

  return {
    name: "vite-projects-json",
    resolveId(id) {
      if (id === virtualModuleId) return resolvedVirtualModuleId
    },
    load(id) {
      if (id !== resolvedVirtualModuleId) return
      const projects = readProjects(PROJECTS_DIR)
      return `export default ${JSON.stringify(projects)}`
    },
    transformIndexHtml() {
      const projects = readProjects(PROJECTS_DIR)
      return [
        {
          tag: "script",
          attrs: { type: "application/json", id: "projects-data" },
          children: JSON.stringify(projects),
        },
      ]
    },
  }
}
