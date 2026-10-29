import { WHATSAPP_NUMBER } from '../data/content'
import { IconWhatsApp } from './Icons'

export function WhatsAppButton() {
  const message = encodeURIComponent(
    'Olá! Vim pelo site da Villa do Farol e gostaria de saber mais sobre disponibilidade.',
  )
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`

  return (
    <a
      className="whatsapp-float"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <IconWhatsApp />
    </a>
  )
}
