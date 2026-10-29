import { useCallback, useState } from 'react'
import { About } from './components/About'
import { Accommodations } from './components/Accommodations'
import { Amenities } from './components/Amenities'
import { Experiences } from './components/Experiences'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Location } from './components/Location'
import { ReservationModal } from './components/ReservationModal'
import { Reviews } from './components/Reviews'
import { WhatsAppButton } from './components/WhatsAppButton'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState<string | undefined>()

  const openReserve = useCallback((roomId?: string) => {
    setSelectedRoom(roomId)
    setModalOpen(true)
  }, [])

  const closeReserve = useCallback(() => {
    setModalOpen(false)
  }, [])

  return (
    <>
      <Header onReserve={() => openReserve()} />
      <main>
        <Hero onReserve={() => openReserve()} />
        <About />
        <Accommodations onReserve={openReserve} />
        <Experiences />
        <Gallery />
        <Amenities />
        <Reviews />
        <FAQ />
        <Location onReserve={() => openReserve()} />
      </main>
      <Footer onReserve={() => openReserve()} />
      <WhatsAppButton />
      <ReservationModal
        open={modalOpen}
        initialRoomId={selectedRoom}
        onClose={closeReserve}
      />
    </>
  )
}
