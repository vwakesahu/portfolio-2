import { useEffect } from 'react'

const K = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a',
]

export function useKonami(onActivate: () => void) {
  useEffect(() => {
    let pos = 0
    const handler = (e: KeyboardEvent) => {
      pos = e.key === K[pos] ? pos + 1 : 0
      if (pos === K.length) {
        pos = 0
        onActivate()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onActivate])
}
