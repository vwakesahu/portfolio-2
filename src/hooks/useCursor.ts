import { useEffect } from 'react'

export function useCursor() {
  useEffect(() => {
    const dot = document.getElementById('c-dot')
    if (!dot) return

    let mx = -99, my = -99
    let raf: number

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', onMove)

    function tick() {
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const enter = () => document.body.classList.add('cur-link')
    const leave = () => document.body.classList.remove('cur-link')

    const observe = () => {
      document.querySelectorAll('a,button,.hd-cmdk,#hero-name').forEach((el) => {
        el.addEventListener('mouseenter', enter)
        el.addEventListener('mouseleave', leave)
      })
    }
    observe()
    const mo = new MutationObserver(observe)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      mo.disconnect()
    }
  }, [])
}
