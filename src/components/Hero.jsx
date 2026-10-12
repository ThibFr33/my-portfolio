import { PROFILE } from '../data/portfolio.js'

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction" data-reveal>
      <div className="heroAura" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="heroContent">
        <h1 className="heroTitle heroIntroItem">
          {PROFILE.name}
        </h1>
        <p className="heroRole heroIntroItem">{PROFILE.role}</p>
        <p className="heroLead heroIntroItem">
          {PROFILE.headline}
        </p>

        <div className="heroCtas heroIntroItem">
          <a className="btn btnPrimary" href="#projets">
            Voir mes projets
          </a>
          <a className="btn" href="#apropos">
            Découvrir mon profil
          </a>
          <a className="btn" href="#contact">
            Me contacter
          </a>
        </div>
      </div>
    </section>
  )
}
