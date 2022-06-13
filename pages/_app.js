import "./../styles/global.css";
import Header from "../components/Header/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NProgress from "nprogress";
import Router from "next/router";
import "./../styles/nprocess.css";
import Head from "next/head";

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
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
      <Head>
        <link rel="icon" href="svgviewer-output.ico" />
        <link rel="shortcut icon" href="/svgviewer-output.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
