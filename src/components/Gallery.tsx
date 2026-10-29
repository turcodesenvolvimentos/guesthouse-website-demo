import { gallery } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export function Gallery() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="gallery section" id="galeria" ref={ref}>
      <div className="container">
        <div className="reveal">
          <p className="section-eyebrow">Galeria</p>
          <h2 className="section-title">Luz, textura e horizonte</h2>
          <p className="section-lead">
            Um olhar sobre os espaços, os detalhes e a paisagem que cercam a Villa.
          </p>
        </div>

        <div className="gallery-grid reveal">
          {gallery.map((item) => (
            <figure key={item.src} className="gallery-item">
              <img src={item.src} alt={item.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
