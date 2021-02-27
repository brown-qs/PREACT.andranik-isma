/************************************************
 *     APP.TSX IS THE ROOT COMPONENT OF APP     *
 * HERE YOU CAN DO THEMING, ROUTING, REDUX-ING. *
 ************************************************/

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
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";

const App: FunctionalComponent = (props) => {
  return (
    <Provider store={appStore}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <Header />
          <Router history={createHashHistory()}>
            <Route path="/" component={Home} />
            <Route path="/task" component={Task} />
            <Route path="/login" component={SignIn} />
            <Route path="/administration" component={Administration} />
          </Router>
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  );
};
export default App;
