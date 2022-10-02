import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { green, purple } from '@mui/material/colors';
import Head from 'next/head'
import Layout from '../components/layout';
import NavigationContextProvider from '../context/navigationContext';
import '../styles/globals.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFC20E',
    },
    secondary: {
      main: '#191919',
    },
    white: '#fffefe',
    black: '#191919'
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
      xl: 1400
    },
  },
});

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Neliörakenne</title>
        <meta name="keywords" content="remontti, remontit, remontointi, kylpyhuoneremontti, kattoremontit, keittiöremontti, rakennuspalvelut, uusimaa, helsinki, espoo, vantaa, nurmijärvi"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <ThemeProvider theme={theme} >
        <CssBaseline/>
        <NavigationContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NavigationContextProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
