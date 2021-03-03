import { createMuiTheme } from "@material-ui/core/styles";
import ArmenianFont from "../public/fonts/ArialArmenian.ttf";

const armenianFont = {
  fontFamily: "Arial-Armenian",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    url(${ArmenianFont}) format('truetype')
  `,
};

/***
 * Theme used in App
 */
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5CB85C", // App color (Green)
      contrastText: "#fff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: "Arial-Armenian",
    // fontSize: 10,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [armenianFont],
      },
    },
  },
});

export default theme;
