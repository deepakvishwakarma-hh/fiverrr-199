// Create new Material UI theme

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#64b5f6",
      light: "#9be7ff",
      dark: "#2286c3",
    },
    secondary: {
      main: "#303f9f",
      light: "#666ad1",
      dark: "#001970",
    },
    error: {
      main: "#e74c3c",
    },
  },
  typography: {
    fontFamily: ["Roboto", "Helvetica", "Arial"].join(","),
  },
});

export default theme;
