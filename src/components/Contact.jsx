import { PROFILE } from '../data/portfolio.js'

export function Contact() {
  return (
    <section className="section" id="contact" aria-label="Contact" data-reveal>
      <div className="sectionHeader">
        <div>
          <h2 className="h2">Contact</h2>
        </div>
      </div>

      <div className="grid">
        <div className="card contactCard contactCardSplit">
          <div className="contactLeft">
            <span className="contactBadge">Disponible pour échanger</span>
            <h3 className="contactTitle">Parlons de votre projet</h3>
            <p className="contactMeta">
              Site vitrine, intégration front-end, interface React ou projet web
              plus complet: je conçois des solutions claires, rapides et
              soignées.
            </p>

            <div className="contactPoints">
              <span className="contactPoint">Réponse rapide</span>
              <span className="contactPoint">Cadrage clair</span>
              <span className="contactPoint">Livraison soignée</span>
            </div>
          </div>

          <div className="contactActions" aria-label="Actions de contact">
            <a className="btn btnSecondary contactMainBtn" href={`mailto:${PROFILE.email}`}>
              Envoyer un email
            </a>

            <div className="contactSecondaryActions">
              <a
                className="btn btnSecondary"
                href={PROFILE.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                className="btn btnSecondary"
                href={PROFILE.links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
