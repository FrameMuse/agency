/// <reference path="./types.ts" />

declare module "virtual:projects" {
  import type { Project } from "./types"
  const projects: Project[]
  export default projects
}
