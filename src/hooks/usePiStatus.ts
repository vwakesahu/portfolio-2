import { useEffect, useState } from 'react'

export function usePiStatus() {
  const [online, setOnline] = useState(true)

  useEffect(() => {
    fetch('/ping', { signal: AbortSignal.timeout(3000) })
      .then(() => setOnline(true))
      .catch(() => setOnline(false))
  }, [])

  return online
}
