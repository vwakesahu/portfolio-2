import { data } from '../data'
import ScrambleEmail from './ScrambleEmail'

export default function Contact() {
  return (
    <section id="s06">
      <div className="wrap">
        <div className="mn">§06 / open to work</div>
        <div className="s-rule" />
        <p className="ct-head rv">
          If you have something to build,
          <br />
          I'd like to hear about it.
        </p>
        <a href={`mailto:${data.contact.email}`} className="ct-email rv">
          <ScrambleEmail />
        </a>
      </div>
    </section>
  )
}
