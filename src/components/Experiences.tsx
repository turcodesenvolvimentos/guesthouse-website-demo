import { experiences } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export function Experiences() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="experiences section" id="experiencias" ref={ref}>
      <div className="container">
        <div className="reveal">
          <p className="section-eyebrow">São Francisco do Sul</p>
          <h2 className="section-title">Experiências além do quarto</h2>
          <p className="section-lead">
            Nossa concierge monta roteiros sob medida: praias escondidas, passeios de
            barco e o melhor da mesa francisquense.
          </p>
        </div>

        <div className="exp-grid">
          {experiences.map((exp, i) => (
            <article
              key={exp.title}
              className={`exp-item reveal reveal-delay-${Math.min(i + 1, 3)}`}
            >
              <img src={exp.image} alt={exp.title} loading="lazy" />
              <div className="exp-content">
                <h3>{exp.title}</h3>
                <p>{exp.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
