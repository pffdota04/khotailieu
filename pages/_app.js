import "./../styles/global.css";
import Header from "../components/Header/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#a255ff",
      main: "#651fff",
      dark: "#0100ca",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ffff5a",
      main: "#ffff00",
      dark: "#c7cc00",
      contrastText: "#311b92",
    },
    grey: {
      light: "#fafafa",
      main: "#bdbdbd",
      dark: "#000000",
      contrastText: "#304ffe",
    },
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
