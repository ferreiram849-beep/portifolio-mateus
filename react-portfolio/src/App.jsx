import Projects from './components/Projects'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#sobre">Mateus Félix</a>
          <nav className="site-nav">
            <a href="#sobre">Sobre</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      <main className="page-content">
        <section id="sobre" className="hero-section">
          <div className="hero-content">
            <h1>Olá, sou Mateus Ferreira Félix</h1>
            <p>
              Sou Mateus Ferreira Félix, estudante de programação, desenvolvedor iniciante,
              com interesse em desenvolver apps mobile.
            </p>
          </div>
        </section>

        <section id="projetos" className="projects-section">
          <div className="section-header">
            <h2>Meus Projetos</h2>
            <p className="section-subtitle">
              Veja alguns trabalhos criados com foco em usabilidade e visual moderno.
            </p>
          </div>

          <Projects />
        </section>
      </main>

      <footer id="contato" className="site-footer">
        <p>© 2026 - Portfólio de Mateus Ferreira Félix</p>
      </footer>
    </div>
  )
}

export default App
