import { useEffect, useState } from 'react'

const links = [
  { href: '#sobre', label: 'A Pousada' },
  { href: '#acomodacoes', label: 'Acomodações' },
  { href: '#experiencias', label: 'Experiências' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#faq', label: 'FAQ' },
  { href: '#localizacao', label: 'Localização' },
]

type Props = {
  onReserve: () => void
}

export function Header({ onReserve }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`header${scrolled || open ? ' is-scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#topo" className="logo" onClick={close}>
          Villa do Farol
          <span>São Francisco do Sul</span>
        </a>

        <button
          type="button"
          className={`menu-toggle${open ? ' is-open' : ''}`}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav${open ? ' is-open' : ''}`} aria-label="Principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              close()
              onReserve()
            }}
          >
            Reservar agora
          </button>
        </nav>
      </div>
    </header>
  )
}
