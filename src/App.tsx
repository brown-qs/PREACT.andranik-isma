// import { RootProvider } from './store'
import Header from "./components/Header";
import Router, { Route } from "preact-router";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Administration from "./pages/Administration";
import Task from "./pages/Task";
import { FunctionalComponent, h } from "preact";
import { createHashHistory } from "history";
import { ThemeProvider } from "@material-ui/core/styles";
import CSSBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import appStore from "./store/store";
import { Provider } from "redux-zero/preact";

const App: FunctionalComponent = (props) => (
  <Provider store={appStore}>
    <ThemeProvider theme={theme}>
      <Header />
      <Router history={createHashHistory()}>
        <Route path="/" component={Home} />
        <Route path="/task" component={Task} />
        <Route path="/login" component={SignIn} />
        <Route path="/administration" component={Administration} />
      </Router>
    </ThemeProvider>
  </Provider>
);
export default App;
