import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useCallback, useState } from 'react'
import Header from './components/Header'
import Identity from './components/Identity'
import Currently from './components/Currently'
import Work from './components/Work'
import Projects from './components/Projects'
import Capabilities from './components/Capabilities'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CmdK from './components/CmdK'
import { useCursor } from './hooks/useCursor'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useCmdK } from './hooks/useCmdK'
import { useKonami } from './hooks/useKonami'
import Lab from './pages/Lab'
import NotFound from './pages/NotFound'

function Portfolio() {
  const { open, setOpen } = useCmdK()
  const [konamiMsg, setKonamiMsg] = useState(false)

  useScrollReveal()

  const triggerKonami = useCallback(() => {
    const current = document.documentElement.getAttribute('data-theme') || ''
    document.documentElement.setAttribute('data-theme', current === '' ? 'noir' : '')
    setKonamiMsg(true)
    setTimeout(() => {
      document.documentElement.setAttribute('data-theme', current)
    }, 1900)
    setTimeout(() => setKonamiMsg(false), 2500)
  }, [])

  useKonami(triggerKonami)

  return (
    <>
      <div id="k-msg" className={konamiMsg ? 'on' : ''}>
        dark mode isn't my thing either
      </div>

      <Header onCmdK={() => setOpen(true)} />
      <main>
        <Identity />
        <Currently />
        <Work />
        <Projects />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
      <CmdK open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default function App() {
  useCursor()

  return (
    <BrowserRouter>
      <div id="c-dot" />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
