import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          const rule = e.target as HTMLElement
          rule.classList.add('on')
          const sec = rule.closest('section')
          if (sec) {
            let d = 180
            sec.querySelectorAll('.rv').forEach((el) => {
              setTimeout(() => el.classList.add('on'), d)
              d += 85
            })
          }
          obs.unobserve(rule)
        })
      },
      { threshold: 0.08 }
    )

    document.querySelectorAll('.s-rule').forEach((r) => obs.observe(r))

    return () => obs.disconnect()
  }, [])
}
