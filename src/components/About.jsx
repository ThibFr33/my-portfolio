import { PROFILE } from '../data/portfolio.js'
import profileImage from '../assets/images/profile.jpg'

export function About() {
  return (
    <section className="section" id="apropos" aria-label="À propos" data-reveal>
      <div className="aboutGrid">
        <div className="card about">
          <span className="sectionEyebrow">À propos</span>
          <h2 className="aboutTitle">Je construis des interfaces claires et des applications faciles à maintenir.</h2>

          <p className="p">{PROFILE.pitch}</p>
        </div>

        <div className="aboutImageWrapper">
          <img
            src={profileImage}
            alt="Portrait de Thibault Charron"
            className="aboutImage"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
