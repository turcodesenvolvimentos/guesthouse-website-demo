type Props = {
  onReserve: () => void
}

export function Hero({ onReserve }: Props) {
  return (
    <section className="hero" id="topo" aria-label="Apresentação">
      <div className="hero-media">
        <img
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2000&q=80"
          alt="Vista tropical sofisticada da Villa do Farol ao entardecer"
          fetchPriority="high"
        />
      </div>

      <div className="hero-content">
        <h1 className="hero-brand">
          Villa <em>do</em> Farol
        </h1>
        <p className="hero-headline">Onde a baía encontra o silêncio boutique.</p>
        <p className="hero-sub">
          Pousada sofisticada em São Francisco do Sul — hospitalidade íntima, design
          tropical e reserva direta.
        </p>
        <div className="hero-actions">
          <button type="button" className="btn btn-gold" onClick={onReserve}>
            Reservar agora
          </button>
          <a href="#acomodacoes" className="btn btn-outline">
            Ver acomodações
          </a>
        </div>
      </div>

      <span className="hero-scroll" aria-hidden="true">
        Descubra
      </span>
    </section>
  )
}
