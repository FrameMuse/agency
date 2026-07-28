import { readdirSync, readFileSync } from "fs"
import { resolve } from "path"

export interface ProjectData {
  name: string
  description: string
  status: string
  tags: string
  links: string[]
  series?: string[]
  highlights: string[]
  images: string[]
}

function parseFrontmatterLine(line: string): { key: string; value: string } | null {
  const match = line.match(/^(\w[\w-]*):\s*(.*)$/)
  if (!match) return null
  return { key: match[1], value: match[2] }
}

function parseFrontmatter(content: string): { data: Record<string, unknown>; body: string } | null {
  const match = content.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) return null

  const raw = match[1]
  const body = match[2]?.trim() ?? ""
  const lines = raw.split("\n")
  const data: Record<string, unknown> = {}
  let currentListKey: string | null = null

  for (const line of lines) {
    if (line.startsWith("    ") && currentListKey) {
      const item = line.trim()
      if (item) (data[currentListKey] as string[]).push(item)
      continue
    }
    currentListKey = null
    const parsed = parseFrontmatterLine(line)
    if (!parsed) continue
    if (parsed.value === "") {
      currentListKey = parsed.key
      data[currentListKey] = []
    } else {
      data[parsed.key] = parsed.value
    }
  }

  return { data, body }
}

function normalizeLinks(links: unknown): string[] {
  if (!links) return []
  if (Array.isArray(links)) return links.filter(Boolean)
  return [String(links)]
}

function normalizeHighlights(highlights: unknown): string[] {
  if (!highlights) return []
  if (Array.isArray(highlights)) return highlights.filter(Boolean)
  return [String(highlights)]
}

function normalizeTags(tags: unknown): string {
  if (!tags) return ""
  if (Array.isArray(tags)) return tags.join(", ")
  return String(tags)
}

function normalizeImages(images: unknown): string[] {
  if (!images) return []
  if (Array.isArray(images)) return images.filter(Boolean)
  return [String(images)]
}

function normalizeSeries(series: unknown): string[] {
  if (!series) return []
  if (Array.isArray(series)) return series.filter(Boolean)
  return String(series).split(",").map(s => s.trim()).filter(Boolean)
}

export function readProjects(projectsDir: string): ProjectData[] {
  const files = readdirSync(projectsDir).filter(f => f.endsWith(".md"))
  const projects: ProjectData[] = []

  for (const file of files) {
    const content = readFileSync(resolve(projectsDir, file), "utf-8")
    const parsed = parseFrontmatter(content)
    if (!parsed) continue

    const d = parsed.data
    projects.push({
      name: (d.name as string) ?? file.replace(/\.md$/, ""),
      description: (d.description as string) ?? "",
      status: (d.status as string) ?? "archived",
      tags: normalizeTags(d.tags),
      links: normalizeLinks(d.links),
      highlights: normalizeHighlights(d.highlights),
      images: normalizeImages(d.images),
      series: normalizeSeries(d.series),
    })
  }

  projects.sort((a, b) => a.name.localeCompare(b.name))
  return projects
}
