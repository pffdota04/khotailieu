import "./../styles/global.css";
import Header from "../components/Header/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NProgress from "nprogress";
import Router from "next/router";
import "./../styles/nprocess.css";


Router.onRouteChangeStart = () => {
  console.log(0);
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  console.log(1);
  NProgress.done();
};

Router.onRouteChangeError = () => {
  console.log(2);
  NProgress.done();
};

export default function MyApp({ Component, pageProps }) {
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
      danger: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000000",
      },
    },
  });
  return (
    <div>
    
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
