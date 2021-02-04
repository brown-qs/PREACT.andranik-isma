import { Fragment, FunctionalComponent, h } from 'preact'
import { Link } from 'preact-router'
import { useRootState } from '../store'

const Header: FunctionalComponent = () => {
  const [{ user }] = useRootState()

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          ISMA
        </a>
        <ul className="nav navbar-nav pull-xs-right">
          {user ? (
            <Fragment>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" href="/">
                  Knowledge Base
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" href="/">
                  Deformations
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" href="/">
                  Syntax
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" href="/">
                  Matrix
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" href="/">
                  Help
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" href="/">
                  Task
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" href="/">
                  Translator
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" href="/">
                  User Info
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" href="/">
                  Administration
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/article/create">
                  <i className="ion-compose" /> New Post
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClassName="active"
                  href="/settings"
                >
                  <i className="ion-gear-a" /> Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClassName="active"
                  href={`/@${user?.username}`}
                >
                  {user?.username}
                </Link>
              </li>
            </Fragment>
          ) : (
            <Fragment>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClassName="active"
                  href="/register"
                >
                  Sign up
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClassName="active"
                  href="/login"
                >
                  Sign in
                </Link>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Header
