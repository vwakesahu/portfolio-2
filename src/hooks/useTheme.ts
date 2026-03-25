import { useCallback, useRef, useState } from 'react'

const NEXT: Record<string, string> = { parchment: 'noir', noir: 'parchment' }
const NEXT_PAPER: Record<string, string> = { parchment: '#0C0A08', noir: '#F2EDE3' }
const NEXT_NAME: Record<string, string> = { parchment: '→ noir', noir: '→ parchment' }

export function useTheme() {
  const [theme, setTheme] = useState('parchment')
  const btnRef = useRef<HTMLButtonElement>(null)

  const nextPaper = NEXT_PAPER[theme]
  const nextName = NEXT_NAME[theme]

  const cycleTheme = useCallback(() => {
    const next = NEXT[theme]
    const ripColor = NEXT_PAPER[theme]
    const btn = btnRef.current
    if (!btn) return

    const r = btn.getBoundingClientRect()
    const cx = r.left + r.width / 2
    const cy = r.top + r.height / 2
    const maxR = Math.hypot(window.innerWidth, window.innerHeight)

    const rip = document.createElement('div')
    rip.style.cssText =
      `position:fixed;border-radius:50%;background:${ripColor};` +
      `left:${cx}px;top:${cy}px;width:10px;height:10px;` +
      `transform:translate(-50%,-50%) scale(1);` +
      `z-index:9998;pointer-events:none;` +
      `transition:transform .65s cubic-bezier(.25,1,.5,1);`
    document.body.appendChild(rip)

    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        rip.style.transform = `translate(-50%,-50%) scale(${maxR * 0.22})`
      })
    )

    setTimeout(() => {
      document.documentElement.setAttribute('data-theme', next === 'parchment' ? '' : next)
      setTheme(next)
    }, 280)

    setTimeout(() => {
      rip.style.transition += ', opacity .3s ease'
      rip.style.opacity = '0'
    }, 420)

    setTimeout(() => rip.remove(), 750)
  }, [theme])

  return { theme, nextPaper, nextName, cycleTheme, btnRef }
}
