import { Layout } from './components/Layout.jsx'
import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { Projects } from './components/Projects.jsx'
import { About } from './components/About.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'
import { Skills } from './components/Skills.jsx'
import { useScrollReveal } from './hooks/useScrollReveal.js'
import './App.css'

function App() {
  useScrollReveal()

  return (
    <Layout>
      <Header />
      <main className="main" id="contenu">
        <div className="container">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </main>
    </Layout>
  )
}

export default App
