export default function NotFound() {
  return (
    <div className="lab-wrap">
      <div className="lab-inner">
        <p>
          404
          <br />
          This page doesn't exist.
        </p>
        <p>
          But you're here, so that's something.
        </p>
        <p className="lab-sig">
          <a href="/" style={{ color: 'var(--if)', textDecoration: 'none', transition: 'color .2s' }}>
            back to the document →
          </a>
        </p>
      </div>
    </div>
  )
}
