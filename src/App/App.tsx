import type { Project } from "../types"
import { Header } from "../Header/Header"
import { Hero } from "../Hero/Hero"
import { ProjectsSection } from "../Projects/Section"
import { Catalog } from "../Catalog/Catalog"
import { Contact } from "../Contact/Contact"
import { Footer } from "../Footer/Footer"

interface AppProps {
  projects?: Project[]
}

function App(props: AppProps) {
  return (
    <>
      <Header />
      <Hero />
      {props.projects ? <ProjectsSection projects={props.projects} /> : null}
      <Catalog />
      <Contact />
      <Footer />
    </>
  )
}

export default App
