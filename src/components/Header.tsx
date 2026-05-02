import { useTheme } from '../hooks/useTheme'
import { DistortedGlass } from './ui/distorted-glass'

interface HeaderProps {
  onCmdK: () => void
}

export default function Header({ onCmdK }: HeaderProps) {
  const { nextPaper, nextName, cycleTheme, btnRef } = useTheme()

  return (
    <div className="sticky top-0 z-[200]" style={{ backgroundColor: 'var(--p)' }}>
      {/* Glass behind — covers full area, content scrolls under it */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        <DistortedGlass className="h-full w-full" />
      </div>
      {/* Header text — isolated above glass, not a child of the filter */}
      <div className="hd-inner" style={{ position: 'relative', zIndex: 1 }}>
        <a href="#" className="hd-handle">@vwakesahu</a>
        <div className="hd-right">
          <span className="hd-cmdk" onClick={onCmdK}>⌘K</span>
          <button
            ref={btnRef}
            className="hd-theme"
            onClick={cycleTheme}
            aria-label="Switch theme"
            style={{ background: nextPaper }}
          >
            <span className="hd-theme-tip">{nextName}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
