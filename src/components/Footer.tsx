import { Github, Linkedin, Send, Twitter } from 'lucide-react'
import { data } from '../data'

const socials = [
  { icon: Github, href: data.contact.github, label: 'GitHub' },
  { icon: Linkedin, href: data.contact.linkedin, label: 'LinkedIn' },
  { icon: Send, href: data.contact.telegram, label: 'Telegram' },
  { icon: Twitter, href: data.contact.twitter, label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="ft-inner">
        <div className="ft-socials">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="ft-soc-link"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
        <div className="ft-pi">
          <span>Served from a Pi 5 · Bengaluru</span>
          <div className="pi-tip">
            Raspberry Pi 5 · 8GB · Debian Trixie · nginx · Cloudflare DNS
          </div>
        </div>
      </div>
    </footer>
  )
}
