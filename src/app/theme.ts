import { createTheme } from "@mui/material";
import { teal, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#009688",
      light: teal[50],
      dark: teal[900],
    },
    secondary: {
      main: grey[600],
      light: grey[100],
      dark: grey[900],
    },
    info: {
      main: grey[50],
      light: grey[50],
      dark: grey[50],
    },
  },
  typography: {
    fontSize: 12,
    h2: {
      fontSize: "1.5rem",
    },
    h3: {
      fontSize: "1.2rem",
    },
  },
});

export default theme;
