import { readFileSync, writeFileSync, readdirSync, rmSync, existsSync } from "fs"
import { resolve } from "path"

// ---------- Minimal JSX Serializer ----------

const SELF_CLOSING = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input",
  "link", "meta", "param", "source", "track", "wbr",
])

function escapeHtml(s: unknown): string {
  if (s == null) return ""
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

function attrToString(key: string, value: unknown): string {
  if (value == null) return ""
  if (key === "className") key = "class"
  if (key === "children" || key === "on" || key === "ref" || key === "key") return ""
  if (typeof value === "boolean") return value ? ` ${key}` : ""
  return ` ${key}="${escapeHtml(value)}"`
}

function jsxToString(jsx: any): string {
  if (jsx == null || jsx === false || jsx === true) return ""
  if (typeof jsx === "string" || typeof jsx === "number") return escapeHtml(jsx)

  // Array of children
  if (Array.isArray(jsx)) return jsx.map(jsxToString).join("")

  // Fragment (Symbol type)
  if (typeof jsx.type === "symbol") {
    return jsx.props?.children != null ? jsxToString(jsx.props.children) : ""
  }

  // Component (function type)
  if (typeof jsx.type === "function") {
    const result = jsx.type(jsx.props ?? {})
    return jsxToString(result)
  }

  // Intrinsic element (string type)
  if (typeof jsx.type === "string") {
    const props = jsx.props ?? {}
    const tag = jsx.type
    let attrs = ""

    for (const key in props) {
      if (key === "children") continue
      if (key === "on") continue
      attrs += attrToString(key, props[key])
    }

    if (SELF_CLOSING.has(tag)) return `<${tag}${attrs} />`

    const children = jsxToString(props.children)
    return `<${tag}${attrs}>${children}</${tag}>`
  }

  return ""
}

// ---------- SCSS mock plugin ----------

Bun.plugin({
  name: "scss-mock",
  setup(build) {
    build.onResolve({ filter: /\.scss$/ }, args => ({
      path: args.path,
      namespace: "scss-mock",
    }))
    build.onLoad({ filter: /.*/, namespace: "scss-mock" }, () => ({
      exports: {},
      loader: "object",
    }))
  },
})

// ---------- Main ----------

const ROOT = resolve(__dirname, "..")
const DIST = resolve(ROOT, "dist")
const PROJECTS_DIR = resolve(ROOT, "projects")

async function main() {
  const { readProjects } = await import("../plugins/parse-projects.ts")
  const projects = readProjects(PROJECTS_DIR)

  const AppModule = await import("../src/App/App.tsx")
  const App = AppModule.default

  const appJsx = <App projects={projects} />
  const appHtml = jsxToString(appJsx)

  const builtHtml = readFileSync(resolve(DIST, "index.html"), "utf-8")

  // Inline the built CSS into a <style> tag so the page is self-contained.
  const cssMatch = builtHtml.match(/<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*\/?>/)
  let finalHtml = builtHtml
  if (cssMatch) {
    const cssPath = resolve(DIST, cssMatch[1].replace(/^\//, ""))
    if (existsSync(cssPath)) {
      const cssContent = readFileSync(cssPath, "utf-8")
      finalHtml = finalHtml.replace(cssMatch[0], `<style>${cssContent}</style>`)
    }
  }

  finalHtml = finalHtml
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace(/<script type="module".*?><\/script>/, "")
    .replace(/<script type="application\/json".*?<\/script>/, "")
    .replace(/[ \t]+$/gm, "")
    .replace(/<(meta|link|img|br|hr|input|source)([^>]*)>/g, (m, tag, attrs) =>
      attrs.trim().endsWith("/") ? m : `<${tag}${attrs} />`,
    )

  writeFileSync(resolve(DIST, "index.html"), finalHtml, "utf-8")

  const assetsDir = resolve(DIST, "assets")
  if (existsSync(assetsDir)) {
    for (const file of readdirSync(assetsDir)) {
      if (file.endsWith(".js") || file.endsWith(".js.map") || file.endsWith(".css")) {
        rmSync(resolve(assetsDir, file))
      }
    }
  }

  console.log("Static HTML generated at:", resolve(DIST, "index.html"))
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
