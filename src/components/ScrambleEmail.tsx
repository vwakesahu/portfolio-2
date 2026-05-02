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

export function useScrambleEmail() {
  const [prefix, setPrefix] = useState(WORDS[0])
  const [settled, setSettled] = useState(WORDS[0])
  const wordIndex = useRef(0)
  const intervalRef = useRef<ReturnType<typeof setInterval>>()
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  const scrambleTo = useCallback((target: string) => {
    let iteration = 0

    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      if (iteration >= target.length) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setPrefix(target)
        setSettled(target)
        return
      }
      setPrefix(
        target
          .split('')
          .map((char, i) => (i < iteration ? char : randomChar()))
          .join('')
      )
      iteration += 0.4
    }, 32)
  }, [])

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

  const mailto = `mailto:${settled}${DOMAIN}`

  return { prefix, mailto }
}

export default function ScrambleEmail() {
  const { prefix } = useScrambleEmail()

  return (
    <>
      <span className="scramble-prefix">{prefix}</span>
      {DOMAIN}
    </>
  )
}
