import { useState } from 'react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="siteHeader">
      <div className="container">
        <div className="navShell">
          <a href="#top" className="brand" onClick={closeMenu}>
            <span className="brandText">Thibault Charron</span>
          </a>

          <button
            className={`navToggle ${menuOpen ? 'isOpen' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id="mobile-navigation"
            className={`navLinks ${menuOpen ? 'navLinksOpen' : ''}`}
          >
            <a href="#apropos" onClick={closeMenu}>À propos</a>
            <a href="#projets" onClick={closeMenu}>Projets</a>
            <a href="#skills" onClick={closeMenu}>Compétences</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
