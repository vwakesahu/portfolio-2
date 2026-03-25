import { useEffect, useRef, useState, useCallback } from 'react'

const DOMAIN = '@vwakesahu.com'
const CHARS = 'abcdefghijklmnopqrstuvwxyz-_0123456789'
const WORDS = [
  'type-anything',
  'hire-vivek',
  'say-hello',
  'build-something',
  'lets-talk',
  'ship-fast',
  'new-project',
  'reach-out',
  'work-together',
  'got-an-idea',
]

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)]
}

export default function ScrambleEmail() {
  const [prefix, setPrefix] = useState(WORDS[0])
  const wordIndex = useRef(0)
  const intervalRef = useRef<ReturnType<typeof setInterval>>()
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  const scrambleTo = useCallback((target: string) => {
    const maxLen = Math.max(prefix.length, target.length)
    let iteration = 0

    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      setPrefix(
        target
          .padEnd(maxLen, ' ')
          .split('')
          .map((char, i) => {
            if (i < iteration) return target[i] || ''
            return randomChar()
          })
          .join('')
          .trimEnd()
      )

      if (iteration >= maxLen) {
        clearInterval(intervalRef.current)
        setPrefix(target)
      }
      iteration += 0.4
    }, 32)
  }, [prefix.length])

  useEffect(() => {
    function cycle() {
      wordIndex.current = (wordIndex.current + 1) % WORDS.length
      scrambleTo(WORDS[wordIndex.current])
      timeoutRef.current = setTimeout(cycle, 3200)
    }
    timeoutRef.current = setTimeout(cycle, 3200)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [scrambleTo])

  return (
    <>
      <span className="scramble-prefix">{prefix}</span>
      {DOMAIN}
    </>
  )
}
