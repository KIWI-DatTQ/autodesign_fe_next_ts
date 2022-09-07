import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5982E2",
    },
    secondary: {
      main: "#42B72A",
    },
    text: {
      primary: "#000000",
      secondary: "#FFFFFF",
    },
  },
});

export default theme;
