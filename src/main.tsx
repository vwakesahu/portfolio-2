import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Console easter eggs
const S = 'font-size:13px;font-family:serif;font-weight:bold;color:#1A1714'
const B = 'font-size:11px;font-family:monospace;color:#6A6058;line-height:1.9'
const G = 'font-size:11px;font-family:monospace;color:#4a9;line-height:1.9'
const D = 'font-size:11px;font-family:monospace;color:#B5ADA3;font-style:italic;line-height:1.9'

console.log(
  "%c Hey.%c\n\nYou opened DevTools on a portfolio page.\nThat's already a good sign.\n\nCommands:\n  hire()    → open my email\n  stack()   → how this is built\n  secret()  → ...\n",
  S, B
)

declare global {
  interface Window {
    hire: () => void
    stack: () => void
    secret: () => void
  }
}

window.hire = () => window.open('mailto:type-anything@vwakesahu.com')

window.stack = () =>
  console.log(
    '%c Stack\n\n  Framework    React + Vite\n  Fonts        Fraunces · Instrument Serif · DM Mono\n  Hosting      Raspberry Pi 4 · 4GB RAM\n  Server       nginx · Cloudflare DNS\n\n  No analytics. No trackers. No cookies.\n  A Pi in Bengaluru.\n',
    G
  )

window.secret = () =>
  console.log(
    '%c ···\n\n  The gym is non-negotiable.\n  The travel is research.\n  The Pi is a flex.\n\n  hire().\n',
    D
  )

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
