import { useReveal } from '../hooks/useReveal'

export function About() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="about section" id="sobre" ref={ref}>
      <div className="container about-grid reveal">
        <div className="about-visual">
          <img
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80"
            alt="Interior elegante da Villa do Farol com luz natural"
            loading="lazy"
          />
        </div>

        <div>
          <p className="section-eyebrow">A pousada</p>
          <h2 className="section-title">Um farol de calma no litoral mais antigo de SC</h2>
          <p className="section-lead">
            A Villa do Farol nasceu para quem troca o óbvio pelo essencial: quarto
            generoso, café feito com calma, e a Baía da Babitonga como horizonte.
            Poucas suítes. Muita presença.
          </p>
          <p className="section-lead" style={{ marginTop: '1rem' }}>
            Cada detalhe — da areia nos tons das paredes ao verde profundo dos
            jardins — foi pensado para uma estadia boutique, sem ostentação, com
            sofisticação real.
          </p>

          <div className="about-stats">
            <div>
              <strong>08</strong>
              <span>Suítes & bangalôs</span>
            </div>
            <div>
              <strong>2019</strong>
              <span>Ano de inauguração</span>
            </div>
            <div>
              <strong>4.9</strong>
              <span>Nota média hóspedes*</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
