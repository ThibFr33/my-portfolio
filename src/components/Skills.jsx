import { SKILLS } from '../data/portfolio'

export function Skills() {
  return (
    <section className="section sectionBg" id="skills" aria-label="Compétences" data-reveal>
      <div className="sectionHeader skillsHeader">
        <div>
          <h2 className="h2">Compétences</h2>
          <p className="sectionSub">
            Stack principale et sujets que je mobilise au quotidien pour concevoir
            des applications web fiables, lisibles et évolutives.
          </p>
        </div>
      </div>

      <div className="skillsSectionCard">
        <div className="skillsIntro">
          <span className="skillsEyebrow">Stack & expertise</span>

          <h3 className="skillsTitle">
            Des interfaces soignées, une logique robuste et une attention portée
            à la qualité du code.
          </h3>

          <p className="skillsText">
            Je travaille principalement sur des projets web full-stack, avec une
            attention particulière portée à l'expérience utilisateur, à la
            performance, à l'accessibilité et à la maintenabilité.
          </p>
        </div>

        <div className="skillsGrid" aria-label="Liste de compétences">
          {SKILLS.map((group) => (
            <article
              className="skillGroup"
              key={group.title}
              data-reveal
              style={{ '--reveal-delay': '90ms' }}
            >
              <h4>{group.title}</h4>
              <div className="skillsCloud">
                {group.items.map((skill) => (
                  <span className="skillChip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
