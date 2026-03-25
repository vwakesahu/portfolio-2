import { data } from '../data'

export default function Work() {
  return (
    <section id="s03">
      <div className="wrap">
        <div className="mn">§03 / 2 positions</div>
        <div className="s-rule" />
        <span className="s-label rv">Selected Work</span>
        {data.experience.map((job) => (
          <div key={job.company} className="job rv">
            <div className="job-head">
              <a href={job.url} className="job-co" target="_blank" rel="noopener noreferrer">
                {job.company}
              </a>
              <span className="job-meta">
                {job.role} · {job.period}
              </span>
            </div>
            <p className="job-desc">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
