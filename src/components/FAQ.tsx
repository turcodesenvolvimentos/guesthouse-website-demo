import { useState } from 'react'
import { faqs } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export function FAQ() {
  const ref = useReveal<HTMLElement>()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="faq section" id="faq" ref={ref}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <p className="section-eyebrow">Dúvidas</p>
          <h2 className="section-title">Perguntas frequentes</h2>
        </div>

        <div className="faq-list reveal">
          {faqs.map((item, index) => {
            const isOpen = open === index
            return (
              <div key={item.q} className={`faq-item${isOpen ? ' is-open' : ''}`}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : index)}
                >
                  {item.q}
                  <span className="icon" aria-hidden="true">
                    +
                  </span>
                </button>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
