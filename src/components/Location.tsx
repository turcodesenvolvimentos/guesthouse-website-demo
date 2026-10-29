import { useReveal } from '../hooks/useReveal'

type Props = {
  onReserve: () => void
}

export function Location({ onReserve }: Props) {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="location section" id="localizacao" ref={ref}>
      <div className="container">
        <div className="reveal">
          <p className="section-eyebrow">Localização</p>
          <h2 className="section-title">São Francisco do Sul, Santa Catarina</h2>
        </div>

        <div className="location-grid reveal">
          <div className="location-map" aria-hidden="true">
            <span className="location-pin" />
            <div className="location-map-inner">
              <h3>Villa do Farol</h3>
              <p>
                Região de São Francisco do Sul · SC
                <br />
                Endereço completo enviado após confirmação da reserva
              </p>
            </div>
          </div>

          <div className="location-details">
            <h3>Fácil de chegar. Difícil de ir embora.</h3>
            <p>
              Estamos em São Francisco do Sul, no litoral norte catarinense — a cerca
              de 45 minutos de Joinville. Não publicamos endereço exato nesta
              demonstração; em um site real, incluímos mapa, rota e ponto de
              referência.
            </p>
            <ul>
              <li>Próximo às praias e ao centro histórico</li>
              <li>~45 min do aeroporto de Joinville (JOI)</li>
              <li>Estacionamento privativo na propriedade</li>
              <li>Transfer sob consulta</li>
            </ul>
            <button type="button" className="btn btn-primary" onClick={onReserve}>
              Solicitar disponibilidade
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
