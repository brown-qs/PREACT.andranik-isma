import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5CB85C',
      contrastText: '#fff',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
})

export default theme
