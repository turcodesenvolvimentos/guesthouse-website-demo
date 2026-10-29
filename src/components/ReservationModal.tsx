import { useEffect, useId, useState, type FormEvent } from 'react'
import { accommodations, WHATSAPP_NUMBER } from '../data/content'

type Props = {
  open: boolean
  initialRoomId?: string
  onClose: () => void
}

function formatDateBR(iso: string) {
  if (!iso) return '—'
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}

export function ReservationModal({ open, initialRoomId, onClose }: Props) {
  const titleId = useId()
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('2')
  const [roomId, setRoomId] = useState(initialRoomId ?? accommodations[0].id)
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (open) {
      setRoomId(initialRoomId ?? accommodations[0].id)
      setError('')
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open, initialRoomId])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  const today = new Date().toISOString().slice(0, 10)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')

    if (!checkIn || !checkOut) {
      setError('Informe as datas de check-in e check-out.')
      return
    }
    if (checkOut <= checkIn) {
      setError('A data de saída deve ser posterior à de entrada.')
      return
    }
    if (!name.trim()) {
      setError('Informe seu nome para personalizarmos a mensagem.')
      return
    }

    const room = accommodations.find((r) => r.id === roomId)
    const guestLabel =
      Number(guests) === 1 ? '1 hóspede' : `${guests} hóspedes`

    const message = [
      `Olá! Gostaria de solicitar uma reserva na Villa do Farol.`,
      ``,
      `Nome: ${name.trim()}`,
      `Check-in: ${formatDateBR(checkIn)}`,
      `Check-out: ${formatDateBR(checkOut)}`,
      `Hóspedes: ${guestLabel}`,
      `Acomodação: ${room?.name ?? 'A definir'}`,
      ``,
      `Aguardo confirmação de disponibilidade e valores. Obrigado(a)!`,
    ].join('\n')

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    onClose()
  }

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="modal-header">
          <div>
            <h2 id={titleId}>Reservar agora</h2>
            <p>Enviamos sua solicitação direto no WhatsApp.</p>
          </div>
          <button
            type="button"
            className="modal-close"
            aria-label="Fechar"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="res-name">Seu nome</label>
            <input
              id="res-name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Como devemos te chamar?"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="res-in">Check-in</label>
              <input
                id="res-in"
                type="date"
                min={today}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="res-out">Check-out</label>
              <input
                id="res-out"
                type="date"
                min={checkIn || today}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="res-guests">Hóspedes</label>
              <select
                id="res-guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'hóspede' : 'hóspedes'}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="res-room">Acomodação</label>
              <select
                id="res-room"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
              >
                {accommodations.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {error ? <p className="form-error">{error}</p> : null}

          <button type="submit" className="btn btn-primary">
            Enviar no WhatsApp
          </button>
          <p className="modal-note">
            Número demonstrativo. Em produção, usamos o WhatsApp do cliente.
          </p>
        </form>
      </div>
    </div>
  )
}
