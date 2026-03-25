import { data } from '../data'

export default function Currently() {
  return (
    <section id="s02">
      <div className="wrap">
        <div className="mn">§02 / Bengaluru, India</div>
        <div className="s-rule" />
        <p className="cur-text rv">{data.currently}</p>
      </div>
    </section>
  )
}
