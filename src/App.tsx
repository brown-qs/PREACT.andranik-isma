import { RootProvider } from './store'
import Header from './components/Header'
import Router, { Route } from 'preact-router'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Settings from './pages/Settings'
import ArticlePage from './pages/ArticlePage'
import EditArticle from './pages/EditArticle'
import Profile from './pages/Profile'
import Footer from './components/Footer'
import { FunctionalComponent, h } from 'preact'
import { createHashHistory } from 'history'
import { ThemeProvider } from '@material-ui/core/styles'
import CSSBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'

const App: FunctionalComponent = () => (
  <RootProvider>
    <ThemeProvider theme={theme}>
      <Header />
      <Router history={createHashHistory()}>
        <Route path="/" component={Home} />
        <Route path="/my-feeds" component={Home} />
        <Route path="/tag/:tag" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/settings" component={Settings} />
        <Route path="/article/create" component={EditArticle} />
        <Route path="/article/:slug/edit" component={EditArticle} />
        <Route path="/article/:slug" component={ArticlePage} />
        <Route path="/:username/favorites" component={Profile} />
      </Router>
      <Footer />
    </ThemeProvider>
  </RootProvider>
)
export default App
