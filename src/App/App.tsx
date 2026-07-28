import type { Project } from "../types"
import { Header } from "../Header/Header"
import { Hero } from "../Hero/Hero"
import { Skills } from "../Skills/Skills"
import { Lifecycle } from "../Lifecycle/Lifecycle"
import { Methods } from "../Methods/Methods"
import { ProjectsSection } from "../Projects/Section"
import { Pricing } from "../Pricing/Pricing"
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
      <Skills />
      <Lifecycle />
      <Methods />
      <Pricing />
      <Contact />
      <Footer />
    </>
  )
}

export default App
