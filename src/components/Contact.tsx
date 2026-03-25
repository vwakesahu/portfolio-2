import { useScrambleEmail } from './ScrambleEmail'

const DOMAIN = '@vwakesahu.com'

export default function Contact() {
  const { prefix, mailto } = useScrambleEmail()

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
        <a href={mailto} className="ct-email rv">
          <span className="scramble-prefix">{prefix}</span>
          {DOMAIN}
        </a>
      </div>
    </section>
  )
}
