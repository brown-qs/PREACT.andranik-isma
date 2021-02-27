import { createMuiTheme } from '@material-ui/core/styles'
/***
 * Theme used in App
 */
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5CB85C', // App color (Green)
      contrastText: '#fff',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    // fontSize: 10,
  },
})

export default theme
