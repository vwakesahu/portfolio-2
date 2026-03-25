import { data } from '../data'

export default function Projects() {
  return (
    <section id="s04">
      <div className="wrap">
        <div className="mn">§04 / 2 shipped</div>
        <div className="s-rule" />
        <span className="s-label rv">Projects</span>
        <div className="rv">
          {data.projects.map((p, i) => (
            <a
              key={p.name}
              href={p.url}
              className="proj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="proj-n">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <div className="proj-name">{p.name}</div>
                <div className="proj-tag">{p.tagline}</div>
                <p className="proj-desc">{p.description}</p>
                <span className="proj-url">
                  {p.urlLabel} <span className="arr">↗</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
