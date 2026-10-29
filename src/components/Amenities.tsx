import { amenities } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import { AmenityIcon } from './Icons'

export function Amenities() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="amenities section" id="comodidades" ref={ref}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <p className="section-eyebrow">Comodidades</p>
          <h2 className="section-title">Tudo para uma estadia sem atrito</h2>
        </div>

        <ul className="amenities-list reveal">
          {amenities.map((item) => (
            <li key={item.label} className="amenity">
              <AmenityIcon name={item.icon} />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
