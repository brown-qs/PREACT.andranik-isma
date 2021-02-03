import { FunctionalComponent, h } from 'preact'

const Footer: FunctionalComponent = () => {
  return (
    <footer>
      <div className="container">
        <a href="/" className="logo-font">ISMAWebEditor</a>
        <span className="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  )
}

export default Footer
