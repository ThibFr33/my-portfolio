import { PROJECTS } from '../data/portfolio.js'

export function Projects() {
  return (
    <section className="section projets" id="projets" aria-label="Projets" data-reveal>
      <div className="sectionHeader">
        <div>
          <h2 className="h2">Projets</h2>
          <p className="sectionSub">
            Quelques projets sur lesquels j'ai travaillé, avec des contextes,
            des contraintes et des choix techniques différents.
          </p>
        </div>
      </div>

      <div className="grid">
        {PROJECTS.map((project, index) => (
          <article
            className={`card project ${index % 2 === 1 ? 'projectReverse' : ''} ${
              project.mediaSize === 'compact' ? 'projectCompactMedia' : ''
            } ${
              project.mediaFit === 'contain' ? 'projectContainMedia' : ''
            }`}
            key={project.title}
            data-reveal
            style={{ '--reveal-delay': `${index * 90}ms` }}
          >
            {project.video && (
              <div
                className="projectMedia"
                aria-label={`Aperçu vidéo du projet ${project.title}`}
              >
                <video
                  className="projectVideo"
                  src={project.video}
                  muted
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
            )}

            <div className="projectBody">
              <div className="projectTopline">
                <span>{project.genre}</span>
                <span>{project.role}</span>
              </div>
              <h3 className="projectTitle">{project.title}</h3>
              <p className="projectImpact">{project.function}</p>
              <p className="projectDesc">{project.description}</p>

              <ul className="tags" aria-label="Technologies utilisées">
                {project.tags.map((tag) => (
                  <li className="tag btnSecondary" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="projectLinks">
                {project.links?.demo && (
                  <a
                    className="mutedLink btnSecondary"
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Démo
                  </a>
                )}
                {project.links?.github && (
                  <a
                    className="mutedLink btnSecondary"
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
