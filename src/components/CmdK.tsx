import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { data } from '../data'

interface CmdKProps {
  open: boolean
  onClose: () => void
}

export default function CmdK({ open, onClose }: CmdKProps) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const [noMatch, setNoMatch] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const noMatchTimer = useRef<ReturnType<typeof setTimeout>>()

  const filtered = useMemo(
    () =>
      query
        ? data.cmdkItems.filter((d) =>
            d.label.toLowerCase().includes(query.toLowerCase())
          )
        : data.cmdkItems,
    [query]
  )

  useEffect(() => {
    if (open) {
      setQuery('')
      setActive(0)
      setNoMatch(false)
      setTimeout(() => inputRef.current?.focus(), 40)
    }
  }, [open])

  useEffect(() => {
    if (noMatchTimer.current) clearTimeout(noMatchTimer.current)
    if (query && filtered.length === 0) {
      noMatchTimer.current = setTimeout(() => setNoMatch(true), 1100)
    } else {
      setNoMatch(false)
    }
    return () => { if (noMatchTimer.current) clearTimeout(noMatchTimer.current) }
  }, [query, filtered.length])

  useEffect(() => { setActive(0) }, [query])

  const execute = useCallback(
    (i: number) => {
      const item = filtered[i]
      if (!item) return
      if (item.url === '__copy__') {
        navigator.clipboard.writeText(data.contact.email)
      } else {
        window.open(item.url)
      }
      onClose()
    },
    [filtered, onClose]
  )

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive((a) => Math.min(a + 1, filtered.length - 1)) }
    if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)) }
    if (e.key === 'Enter') { e.preventDefault(); execute(active) }
  }

  return (
    <div
      id="ck-ov"
      className={open ? 'on' : ''}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div id="ck-box">
        <div id="ck-in-wrap">
          <input
            ref={inputRef}
            id="ck-in"
            placeholder="Search or navigate..."
            autoComplete="off"
            spellCheck={false}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div id="ck-list">
          {filtered.length > 0
            ? filtered.map((d, i) => (
                <div
                  key={d.label}
                  className={`ck-item${i === active ? ' act' : ''}`}
                  onClick={() => execute(i)}
                  onMouseEnter={() => setActive(i)}
                >
                  <span className="ck-arr">↗</span>
                  <span className="ck-lbl">{d.label}</span>
                </div>
              ))
            : noMatch && <div className="ck-no">I can probably build that.</div>}
        </div>
        <div id="ck-bar">
          <span>↵ open</span>
          <span>↑↓ navigate</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  )
}
