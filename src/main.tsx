import "./styles/global.scss"
import projects from "virtual:projects"
import { WebInflator } from "@denshya/tama"
import App from "./App/App"

const inflator = new WebInflator
const root = document.getElementById("root")
root?.replaceChildren(inflator.inflate(<App projects={projects} />))
