import { brand } from '../data/content'

type Props = {
  onReserve: () => void
}

export function Footer({ onReserve }: Props) {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <p className="footer-brand">
              Villa do Farol
              <span>{brand.tagline}</span>
            </p>
            <p style={{ maxWidth: '28ch', marginTop: '0.75rem' }}>
              Pousada boutique demonstrativa — criada para prospectar clientes de
              hospedagem em São Francisco do Sul.
            </p>
          </div>

          <div>
            <h4>Explorar</h4>
            <ul>
              <li>
                <a href="#sobre">A Pousada</a>
              </li>
              <li>
                <a href="#acomodacoes">Acomodações</a>
              </li>
              <li>
                <a href="#experiencias">Experiências</a>
              </li>
              <li>
                <a href="#galeria">Galeria</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Contato</h4>
            <ul>
              <li>
                <a href={`tel:+${brand.phone.replace(/\D/g, '')}`}>{brand.phone}</a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </li>
              <li>{brand.instagram}</li>
              <li>
                <button
                  type="button"
                  onClick={onReserve}
                  style={{ color: 'inherit', textDecoration: 'underline' }}
                >
                  Reservar agora
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4>Atendimento</h4>
            <ul>
              <li>Reservas: 9h – 20h</li>
              <li>Recepção: 24h</li>
              <li>WhatsApp prioritário</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} Villa do Farol · Demonstração comercial · São Francisco do Sul,
            SC
          </p>
          <p className="footer-demo-note">SITE DEMO · MARCA FICTÍCIA</p>
        </div>
      </div>
    </footer>
  )
}
