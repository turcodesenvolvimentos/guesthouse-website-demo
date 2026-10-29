import { accommodations } from '../data/content'
import { useReveal } from '../hooks/useReveal'

type Props = {
  onReserve: (roomId?: string) => void
}

function formatPrice(value: number) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
  })
}

export function Accommodations({ onReserve }: Props) {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="rooms section" id="acomodacoes" ref={ref}>
      <div className="container">
        <div className="reveal">
          <p className="section-eyebrow">Acomodações</p>
          <h2 className="section-title">Suítes pensadas para ficar</h2>
          <p className="section-lead">
            Três tipologias, um mesmo padrão: linho, luz natural e silêncio. Escolha
            a sua e reserve direto conosco.
          </p>
        </div>

        <div className="rooms-grid">
          {accommodations.map((room, i) => (
            <article
              key={room.id}
              className={`room reveal reveal-delay-${Math.min(i + 1, 3)}`}
            >
              <div className="room-image">
                <img src={room.image} alt={room.name} loading="lazy" />
              </div>
              <div className="room-body">
                <p className="subtitle">{room.subtitle}</p>
                <h3>{room.name}</h3>
                <p>{room.description}</p>
                <ul className="room-meta">
                  {room.amenities.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                  <li>{room.size}</li>
                </ul>
                <div className="room-footer">
                  <div className="room-price">
                    a partir de
                    <strong>{formatPrice(room.priceFrom)}</strong>
                    /noite
                  </div>
                  <button
                    type="button"
                    className="btn btn-gold"
                    onClick={() => onReserve(room.id)}
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
