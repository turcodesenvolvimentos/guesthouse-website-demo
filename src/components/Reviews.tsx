import { reviews } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export function Reviews() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="reviews section" id="avaliacoes" ref={ref}>
      <div className="container">
        <div className="reveal">
          <p className="section-eyebrow">Avaliações</p>
          <h2 className="section-title">O que dizem nossos hóspedes</h2>
          <span className="reviews-disclaimer">
            Avaliações demonstrativas · conteúdo fictício
          </span>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, i) => (
            <article
              key={review.name}
              className={`review reveal reveal-delay-${i + 1}`}
            >
              <div className="review-stars" aria-label={`${review.rating} de 5 estrelas`}>
                {'★'.repeat(review.rating)}
              </div>
              <blockquote>“{review.text}”</blockquote>
              <div className="review-author">
                <strong>{review.name}</strong>
                <span>{review.origin}</span>
              </div>
              <p className="review-fake">Depoimento fictício para demonstração</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
