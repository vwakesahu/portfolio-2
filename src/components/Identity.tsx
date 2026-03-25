import { useEffect, useRef, useCallback } from 'react'
import { data } from '../data'

export default function Identity() {
  const nameRef = useRef<HTMLSpanElement>(null)
  const scrRef = useRef(false)

  useEffect(() => {
    setTimeout(() => document.getElementById('hl1')?.classList.add('lift'), 280)
    setTimeout(() => document.getElementById('hl2')?.classList.add('lift'), 400)
    setTimeout(() => document.querySelector('.hero-byline')?.classList.add('on'), 720)
  }, [])

  const handleScramble = useCallback(() => {
    if (scrRef.current || !nameRef.current) return
    scrRef.current = true
    const el = nameRef.current
    const orig = data.name
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let it = 0
    const id = setInterval(() => {
      el.textContent = orig
        .split('')
        .map((c, i) => {
          if (c === ' ') return ' '
          if (i < it) return orig[i]
          return chars[Math.floor(Math.random() * chars.length)]
        })
        .join('')
      if (it >= orig.length) {
        clearInterval(id)
        el.textContent = orig
        scrRef.current = false
      }
      it += 0.38
    }, 28)
  }, [])

  return (
    <section id="s01">
      <div className="wrap">
        <div className="mn">§01 / available</div>
        <div className="hero-text">
          <div className="h-line" id="hl1">
            <span>{data.headline[0]}</span>
          </div>
          <div className="h-line" id="hl2">
            <span>{data.headline[1]}</span>
          </div>
        </div>
        <div className="hero-byline rv">
          <div>
            <span id="hero-name" ref={nameRef} onMouseEnter={handleScramble}>
              {data.name}
            </span>
            <span className="hero-dot">·</span>
            <span className="hero-pill">{data.role}</span>
            <span className="hero-dot">·</span>
            <span className="hero-pill">{data.location}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
